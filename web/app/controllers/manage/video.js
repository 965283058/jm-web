var db = require("../../db/Schema");
var file = require("../../utils/file")
var util = require("../../utils/index")

module.exports.list = async(ctx, next)=> {
    let page = Number.parseInt(ctx.request.body.page) || 1
    let rows = Number.parseInt(ctx.request.body.rows) || 1
    let total = await db.Video.count()

    let list = await db.Video.find().limit(rows).skip((page - 1) * rows)
    if (list instanceof Array) {
        list.forEach((item)=> {
            item.url = ctx.serverOrigin + item.url
        })
        ctx.body = {"status": 0, "message": "", data: {page: page, rows: list, total: total}}
    } else {
        ctx.body = {"status": 10, "message": "查询出错:" + list}
    }
}


module.exports.edit = async(ctx, next)=> {
    let id = ctx.request.body.fields.id;

    let text = ctx.request.body.fields.text;

    let video = ctx.request.body.files.video;


    if (!id && !video) {
        ctx.body = {"status": 10, "message": '视频不能为空'}
        return
    }

    let moveResult = 0
    let webPath = ''

    if (video) {
        let videoPath = video.path //requset中的图片存放地址
        let ext = video.name.split(".").pop()
        webPath = '/static/upload/video/' + util.guid() + "." + ext //网站视频存放地址
        moveResult = await file.move(videoPath, process.cwd() + webPath) //从临时目录移动到网站目录,成功返回1，失败返回error对象
    }

    if (moveResult === 1 || moveResult === 0) {
        let data = {
            text: text
        }
        if (moveResult === 1) {
            data.url = webPath
        }

        if (id) {
            data.id = id
            await update(ctx, data)
        } else {
            await add(ctx, data)
        }
    } else {
        ctx.body = {"status": 10, "message": '服务器视频处理错误：视频文件移动错误,' + moveResult.message}
    }
}

const update = async(ctx, data) => {
    if (data.url) {
        await delURL(data.id)
    }
    let result = await db.Video.update({"_id": data.id}, {
        "$set": data
    })
    output(ctx, result)
}

const add = async(ctx, data) => {
    let v = new db.Video({
        "text": data.text,
        'url': data.url
    })
    let result = await v.save()
    output(ctx, result)
}

module.exports.del = async(ctx, next)=> {
    let id = ctx.request.body.id;
    await delURL(id)
    let result = await db.Video.remove({"_id": id})
    output(ctx, result)
}

function output(ctx, result) {
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": '', "data": result}

    }
}

async function delURL(id) {
    let data = await db.Video.findOne({_id: id})
    return await file.delete(process.cwd() + data.url)
}
