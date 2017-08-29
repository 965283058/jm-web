var db = require("../../db/Schema");
module.exports.list = async(ctx, next)=> {
    let menus = await db.JoinUs.find().sort({"index": 1})
    if (menus instanceof Array) {
        ctx.body = {"status": 0, "message": "", data: menus}
    } else {
        ctx.body = {"status": 0, "message": "查询出错:" + menus}
    }
}


module.exports.edit = async(ctx, next)=> {

    let id = ctx.request.body.id;

    let index = ctx.request.body.index;

    let status = ctx.request.body.status;

    let cn = ctx.request.body.cn;

    let en = ctx.request.body.en;

    let data = {
        index: Number.parseInt(index),
        status: Number.parseInt(status),
        cn:cn,
        en:en
    }
    let result;
    if (id) {
        result = await db.JoinUs.update({"_id": id}, {
            "$set": data
        })
    } else {
        let item = new db.JoinUs(data)
        result = await item.save()
    }
    output(ctx,result)
}



module.exports.del = async(ctx, next)=> {
    let id = ctx.request.body.id;
    let result = await db.JoinUs.remove({"_id": id})
    output(ctx,result)
}

function output(ctx, result) {
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": '', "data": result}
    }
}
