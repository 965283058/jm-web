const db = require("../../db/Schema");
const file = require("../../utils/file")
const util = require("../../utils/index")

module.exports.list = async(ctx, next)=> {
    let page = Number.parseInt(ctx.request.body.page) || 1
    let rows = Number.parseInt(ctx.request.body.rows) || 1
    let total = await db.Prople.count()

    let list = await db.Prople.find().sort({"index": 1}).limit(rows).skip((page - 1) * rows)
    if (list instanceof Array) {
        list.forEach((item)=> {
            item.img = ctx.serverOrigin + item.img
        })
        ctx.body = {"status": 0, "message": "", data: {page: page, rows: list ,total: total}}
    } else {
        ctx.body = {"status": 10, "message": "查询出错:" + list}
    }
}


module.exports.edit = async(ctx, next)=> {

    let id = ctx.request.body.fields.id;

    let index = ctx.request.body.fields.index;

    let status = ctx.request.body.fields.status;

    let img = ctx.request.body.files.img;

    let cn = JSON.parse(ctx.request.body.fields.cn);

    let en = JSON.parse(ctx.request.body.fields.en);


    if (!id && !img) {
        ctx.body = {"status": 10, "message": '图片不能为空'}
        return
    }

    let moveResult = 0
    let webPath = ''

    if (img) {
        let imgPath = ctx.request.body.files.img.path //requset中的图片存放地址
        let ext = ctx.request.body.files.img.name.split(".").pop()
        webPath = '/static/upload/peoples/' + util.guid() + "." + ext //网站文件图片存放地址
        moveResult = await file.move(imgPath, process.cwd() + webPath) //从临时目录移动到网站目录,成功返回1，失败返回error对象
    }

    if (moveResult === 1 || moveResult === 0) {
        let data = {
            index: Number.parseInt(index),
            status: Number.parseInt(status),
            cn: cn,
            en: en
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
        ctx.body = {"status": 10, "message": '服务器图片处理错误：图片文件移动错误,' + moveResult.message}
    }

}

const update = async(ctx, data) => {

    if (data.img) {
        await delPeopleImg(data.id)
    }
    let result = await db.Prople.update({"_id": data.id}, {
        "$set": data
    })
    output(ctx, result)
}

const add = async(ctx, data) => {
    let prople = new db.Prople({
        "index": data.index,
        'status': data.status,
        'img': data.img,
        'cn': data.cn,
        'en': data.en
    })
    let result = await prople.save()
    if (result._id) {
        ctx.body = {"status": 0, "message": '', "data": result}
    } else {
        ctx.body = {"status": 10, "message": result}
    }
}

module.exports.del = async(ctx, next)=> {
    let id = ctx.request.body.id;
    await delPeopleImg(id)
    let result = await db.Prople.remove({"_id": id})
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

async function delPeopleImg(id) {
    let data = await db.Prople.findOne({_id: id})
    return await file.delete(process.cwd() + data.img)
}
