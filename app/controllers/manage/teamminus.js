const db = require("../../db/Schema");
const file = require("../../utils/file")
const util = require("../../utils/index")
module.exports.getInfo = async(ctx, next)=> {
    let data = await db.WebSetting.findOne({key: 'teamminus'})
    if (data instanceof Error) {
        ctx.body = {"status": 10, "message": "查询出错:" + data}
    } else {
        let info = {
            cn: {
                content: data.value.cn.content,
                img: data.value.cn.img&&(ctx.serverOrigin + data.value.cn.img)
            },
            en: {
                content: data.value.en.content,
                img: data.value.en.img && (ctx.serverOrigin + data.value.en.img)
            }
        }
        ctx.body = {"status": 0, "message": "", "data": info}
    }
}


module.exports.edit = async(ctx, next)=> {
    let cn_content = ctx.request.body.fields.cn_content;

    let en_content = ctx.request.body.fields.en_content;


    let cn_img = ctx.request.body.files.cn_img

    let en_img = ctx.request.body.files.en_img

    let updateData = {
        "value": {
            "cn": {
                content: cn_content
            },
            "en": {
                content: en_content
            }
        }
    }
    let moveResult = 0
    let webPath = ''
    let teamminus = await db.WebSetting.findOne({key: 'teamminus'})
    if (cn_img) {
        let imgPath = cn_img.path //requset中的图片存放地址
        let ext = cn_img.name.split(".").pop()
        webPath = '/static/upload/' + util.guid() + "." + ext //网站文件图片存放地址
        moveResult = await file.move(imgPath, process.cwd() + webPath) //从临时目录移动到网站目录,成功返回1，失败返回error对象
        if (moveResult === 1) {
            updateData.value.cn.img = webPath
            await file.delete(process.cwd() + teamminus.value.cn.img)
        } else {
            return ctx.body = {"status": 10, "message": '图片文件移动错误：' + moveResult.message}
        }
    } else {
        updateData.value.cn.img = teamminus.value.cn.img
    }
    if (en_img) {
        let imgPath = en_img.path //requset中的图片存放地址
        let ext = en_img.name.split(".").pop()
        webPath = '/static/upload/' + util.guid() + "." + ext //网站文件图片存放地址
        moveResult = await file.move(imgPath, process.cwd() + webPath) //从临时目录移动到网站目录,成功返回1，失败返回error对象
        if (moveResult === 1) {
            updateData.value.en.img = webPath
            await file.delete(process.cwd() + teamminus.value.en.img)
        } else {
            return ctx.body = {"status": 10, "message": '图片文件移动错误：' + moveResult.message}
        }
    } else {
        updateData.value.en.img = teamminus.value.en.img
    }


    let result = await db.WebSetting.update({"key": 'teamminus'}, {
        "$set": updateData
    })
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": '', "data": result}
    }
}



