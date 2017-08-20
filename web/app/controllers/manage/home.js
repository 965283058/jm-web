var db = require("../../db/Schema");
var file = require("../../utils/file")
var util = require("../../utils/index")
module.exports.list = async(ctx, next)=> {
    let menus = await db.HomeBanner.find().sort({"index": 1})
    if (menus instanceof Array) {
        menus.forEach((item)=> {
            item.img = ctx.serverOrigin + item.img
        })
        ctx.body = {"status": 0, "message": "", data: menus}
    } else {
        ctx.body = {"status": 0, "message": "查询出错:" + menus}
    }
}


module.exports.edit = async(ctx, next)=> {

    let id = ctx.request.body.fields.id;

    let index = ctx.request.body.fields.index;

    let status = ctx.request.body.fields.status;

    let img = ctx.request.body.files.img

    if (!id && !img) {
        ctx.body = {"status": 10, "message": '图片不能为空'}
        return
    }

    let moveResult = 0
    let webPath = ''

    if (img) {
        let imgPath = ctx.request.body.files.img.path //requset中的图片存放地址
        let ext = ctx.request.body.files.img.name.split(".").pop()
        webPath = '/static/upload/' + util.guid() + "." + ext //网站文件图片存放地址
        moveResult = await file.move(imgPath, process.cwd() + webPath) //从临时目录移动到网站目录,成功返回1，失败返回error对象
    }

    if (moveResult === 1 || moveResult === 0) {
        let data = {
            index: Number.parseInt(index),
            status: Number.parseInt(status),
        }
        if (moveResult === 1) {
            data.img = webPath
        }

        if (id) {
            data.id = id
            await update(ctx, data)
        } else {
            await add(ctx, data)
        }
    } else {
        ctx.body = {"status": 10, "message": '图片文件移动错误：' + moveResult.message}
    }

}

const update = async(ctx, data) => {
    let updateData = {
        "index": data.index,
        'status': data.status
    }
    if (data.img) {
        updateData.img = data.img
    }
    let result = await db.HomeBanner.update({"_id": data.id}, {
        "$set": updateData
    })
    output(ctx, result)
}
const add = async(ctx, data) => {
    let banner = new db.HomeBanner({
        "index": data.index,
        'status': data.status,
        'img': data.img
    })
    let result = await banner.save()
    if (result._id) {
        ctx.body = {"status": 0, "message": '', "data": result}
    } else {
        ctx.body = {"status": 10, "message": result}
    }
}

module.exports.del = async(ctx, next)=> {
    let id = ctx.request.body.id;
    let banner = await db.HomeBanner.findOne({_id: id})
    await file.delete(process.cwd() + banner.img)
    let result = await db.HomeBanner.remove({"_id": id})
    if (!(result instanceof Error)) {
        ctx.body = {"status": 0, "message": '', "data": result}
    } else {
        ctx.body = {"status": 10, "message": result}
    }
}

function output(ctx, result) {
    if (result.ok == 1) {
        ctx.body = {"status": 0, "message": '', "data": result}
    } else {
        ctx.body = {"status": 10, "message": result}
    }
}
