const db = require("../../db/Schema");
const crypto = require('crypto');

module.exports.list = async(ctx, next)=> {
    let page = Number.parseInt(ctx.request.body.page) || 1
    let rows = Number.parseInt(ctx.request.body.rows) || 1
    let name = ctx.request.body.name;
    let status = ctx.request.body.status || [];
    let where = {
        status: {'$nin': [-1]}
    }
    if (name) {
        where.name = new RegExp(name);
    }
    if (status) {
        where.status['$in'] = status
    }
    let total = await db.Admin.count(where)
    let result = await db.Admin.find(where).limit(rows).skip((page - 1) * rows)
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": "", data: {page: page, rows: result, total: total}}
    }
}

module.exports.edit = async(ctx, next)=> {

    let id = ctx.request.body.id;

    let name = ctx.request.body.name;

    let email = ctx.request.body.email.trim();

    let power = ctx.request.body.power;

    let status = Number.parseInt(ctx.request.body.status);

    let data = {
        name: name,
        email: email,
        power: power,
        status: Number.parseInt(status)
    }
    let result;
    if (id) {
        result = await db.Admin.update({"_id": id}, {
            "$set": data
        })
    } else {
        let hasher = crypto.createHash("md5");
        hasher.update(email);
        let pwd_md5 = hasher.digest('hex');//hashmsg为加密之后的数据
        data.pwd = pwd_md5;
        data.lastLoginTime = null
        data.superAdmin = 0
        data.status = -10
        let user = new db.Admin(data)
        result = await user.save()
    }
    output(ctx, result)
}

module.exports.del = async(ctx, next)=> {
    let id = ctx.request.body.id;

    let data = {
        status: -1
    }
    let result = await db.Admin.update({"_id": id}, {
        "$set": data
    })
    output(ctx, result)
}

module.exports.resetPwd = async(ctx, next)=> {
    let id = ctx.request.body.id;
    let user = await db.Admin.findOne({_id: id});
    let hasher = crypto.createHash("md5");
    hasher.update(user.email)
    let pwd_md5 = hasher.digest('hex');//hashmsg为加密之后的数据
    let result = await db.Admin.update({_id: id}, {
        '$set': {
            pwd: pwd_md5,
            pwdStatus: 0,
            errCount:0
        }
    })

    output(ctx, result)
}


module.exports.login = async(ctx, next)=> {
    let email = ctx.request.body.username;
    let pwd = ctx.request.body.pwd;
    let user = await db.Admin.findOne({"email": email});
    if (user instanceof Error) {
        ctx.body = {"status": 10, "message": user};
    } else {
        if (!user) {
            return ctx.body = {"status": 10, "message": "该用户不存在！"}
        }
        let hasher = crypto.createHash("md5");
        hasher.update(pwd);
        let pwd_md5 = hasher.digest('hex');//hashmsg为加密之后的数据
        if (user.pwd == pwd_md5) {
            if (user.errCount >= 5) {
                return ctx.body = {"status": 10, "message": "账号锁定中"}
            }
            if (user.status == 0) {
                return ctx.body = {"status": 3, "message": "账号已禁用"}
            }
            user.lastLoginTime = Date.now();
            user.errCount = 0;
            await user.save();
            ctx.session.admin = user
            let where = {};
            if (user.superAdmin == 0) {
                where = {"_id": {"$in": user.power}}
            }
            let menus =await db.Menu.find(where, 'href')
            ctx.session.admin.menus = menus
            ctx.body = {
                "status": 0, "message": "", "data": {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    pwdStatus: user.pwdStatus
                }
            }
        } else {
            if (user.errCount < 5) {
                ctx.body = {"status": 2, "message": "用户名或密码输入错误"};
                user.errCount++;
                user.save();
            } else {
                ctx.body = {"status": 2, "message": "密码输入错误超过5次,账号锁定半小时"};
                setTimeout(function () {
                    user.errCount = 0;
                    user.save();
                }, 1000 * 60 * 30);
            }
        }
    }
}

module.exports.logout = async(ctx,next)=> {
    ctx.session.admin = null;
    ctx.body = {"status": 0, "message": "", data: {result: "退出成功"}};
}

module.exports.changePwd = async(ctx,next)=> {
    let pwd = ctx.request.body.pwd.trim();
    let oldPwd = ctx.request.body.oldPwd.trim();
    if(oldPwd.length==0){
        return ctx.body = {"status": 20, "message": "原密码不能为空！"};
    }
    if(!/^[\S]{6,20}$/.test(pwd)){
        return ctx.body = {"status": 20, "message": "新密码必须为6-20位非空字符！"};
    }

    let hasher = crypto.createHash("md5");
    hasher.update(oldPwd);
    let oldPwd_md5 = hasher.digest('hex');//hashmsg为加密之后的数据
    if (oldPwd_md5 !== ctx.session.admin.pwd) {
        return ctx.body = {"status": 20, "message": "原密码不正确，请重试！"};
    }

    hasher = crypto.createHash("md5");
    hasher.update(pwd);
    let pwd_md5 = hasher.digest('hex');//hashmsg为加密之后的数据
    let result = await db.Admin.update({_id: ctx.session.admin._id}, {
        '$set': {
            pwd: pwd_md5,
            pwdStatus: 1
        }
    })
    ctx.session.admin.pwd=pwd_md5
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": "修改密码失败：" + result};
    } else {
        ctx.body = {"status": 0, "message": "", data: result};
    }
}


function output(ctx, result) {
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": '', "data": result}
    }
}



