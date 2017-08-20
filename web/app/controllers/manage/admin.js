var db = require("../../db/Schema");
var crypto = require('crypto');

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
    let pwd_md5 = hasher.digest('hex');//hashmsg为加密之后的数据
    let result = await db.Admin.update({_id: id}, {
        '$set': {
            pwd: pwd_md5,
            pwdStatus: 0
        }
    })

    output(ctx, result)
}

function output(ctx, result) {
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": '', "data": result}
    }
}



