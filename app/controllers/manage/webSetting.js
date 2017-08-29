var db = require("../../db/Schema");
module.exports.get = async(ctx, next)=> {
    let key = ctx.request.body.key||'';

    if (!key.trim()) {
        return ctx.body = {"status": 10, "message": "键名不能为空！"}
    }
    let data = await db.WebSetting.findOne({'key': key})
    if (data instanceof Error) {
        ctx.body = {"status": 10, "message": "查询出错:" + data}
    } else {
        ctx.body = {"status": 0, "message": "", "data":data}
    }
}


module.exports.edit = async(ctx, next)=> {

    let key = ctx.request.body.key;

    let value = ctx.request.body.value;




    if (!key.trim()) {
        return ctx.body = {"status": 10, "message": "键名不能为空！"}
    }

    if (typeof value != "object") {
        return ctx.body = {"status": 10, "message": "要更改的集合必须是Object类型！"}
    }

    let result = await db.WebSetting.update({"key": key}, {
        "$set": {'value': value}
    })
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": "", data: result}
    }
}





