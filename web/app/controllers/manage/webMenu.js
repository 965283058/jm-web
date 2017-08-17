var db = require("../../db/Schema");

module.exports.list = async(ctx, next)=> {
    let menus = await db.webMenu.find().sort({"index": 1})
    if (menus instanceof Array) {
        ctx.body = {"status": 0, "message": "", data: menus}
    } else {
        ctx.body = {"status": 0, "message": "查询出错:" + menus}
    }
}


module.exports.edit = async(ctx, next)=> {

    let id = ctx.request.body.id;

    let cn = ctx.request.body.cn;

    let en = ctx.request.body.en;

    let index = ctx.request.body.index;

    let status = ctx.request.body.status;

    let result = await db.webMenu.update({"_id": id}, {"$set": {"cn": cn, "en": en, 'index': index, 'status': status}})
    if (result.ok == 1) {
        ctx.body = {"status": 0, "message": '', "data": result}
    } else {
        ctx.body = {"status": 10, "message": result}
    }

}
/*

async function a() {
    return new Promise((rev,rej)=>{
         setTimeout(()=>{
             console.info("time")
             rev()
         },2000)
     })
}*/
