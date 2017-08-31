var db = require("../../db/Schema");
var file = require("../../utils/file")
var util = require("../../utils/index")

module.exports.list = async(ctx, next)=> {
    let name_cn = decodeURI(ctx.request.body.name_cn || '')
    let name_en = decodeURI(ctx.request.body.name_en || '')

    let page = Number.parseInt(ctx.request.body.page) || 1
    let rows = Number.parseInt(ctx.request.body.rows) || 1
    let type = ctx.request.body.type || []
    let where = {}
    if (name_cn) {
        where['cn.name'] = new RegExp(name_cn)
    }
    if (name_en) {
        where['en.name'] = new RegExp(name_en)
    }
    if (type) {
        where.type = {'$in': type}
    }

    let total = await db.Project.count(where)
    let list = await db.Project.find(where).sort({"time": -1}).limit(rows).skip((page - 1) * rows)
    if (list instanceof Array) {
        list.forEach((item)=> {
            item.files.forEach(file=> {
                file = ctx.serverOrigin + file
            })
        })
        ctx.body = {"status": 0, "message": "", data: {page: page, rows: list, total: total}}
    } else {
        ctx.body = {"status": 10, "message": "查询出错:" + list}
    }
}

module.exports.del = async(ctx, next)=> {
    let id = ctx.request.body.id;

    let data = await db.Project.findOne({_id: id})
    if (data.files && data.files.length) {
        let url = data.files[0]
        let index = url.lastIndexOf('/')
        url = data.files[0].substring(0, index)
        await file.rmDir(process.cwd() + url)
    }

    let result = await db.Project.remove({"_id": id})
    output(ctx, result)
}

module.exports.edit = async(ctx, next)=> {
    let id = ctx.request.body.fields.id;
    let time = new Date(ctx.request.body.fields.time).getTime();
    let type = Number.parseInt(ctx.request.body.fields.type)
    let name_cn = ctx.request.body.fields.name_cn;
    let name_en = ctx.request.body.fields.name_en;
    let content_cn = ctx.request.body.fields.content_cn;
    let content_en = ctx.request.body.fields.content_en;
    let urls = JSON.parse(ctx.request.body.fields.urls);

    let files = ctx.request.body.files

    let webDir = ''
    let dbFiles = []//存到数据库的最终数组
    if (id) {//更新项目
        let project = await db.Project.findOne({_id: id})
        if (project.files && project.files.length) {
            let url = project.files[0]
            let index = url.lastIndexOf('/')
            webDir = url.substring(0, index)
            let exists = await file.exists(process.cwd() + webDir)
            if (!exists) {
                await file.mkDir(process.cwd() + webDir)
            }
        } else {
            webDir = '/static/upload/project/' + util.converToCNDate().replace('-', '').replace(' ', '').replace(':', '')
            let result = await file.mkDir(process.cwd() + webDir)
            if (result != 1) {
                return ctx.body = {"status": 10, "message": result}
            }
        }
        webDir = webDir + '/'
        //删除旧文件
        let allFiles = project.files

        for (let i = 0; i < urls.length; i++) {  //表单文件
            if (urls[i]) {
                urls[i] = urls[i].substring(urls[i].indexOf('/static'))
                let index = allFiles.indexOf(urls[i])
                if (index > -1) {
                    allFiles.splice(index, 1)
                }
            }
        }
        for (let url of allFiles) {
            await file.delete(process.cwd() + url)
        }


        for (let i = 0; i < urls.length; i++) {
            if (files['file' + i]) {
                let filePath = files['file' + i].path //requset中的图片存放地址
                let webPath = `${webDir}${i}_${files['file' + i].name}` //网站文件图片存放地址
                await file.move(filePath, process.cwd() + webPath) //从临时目录移动到网站目录,成功返回1，失败返回error对象
                dbFiles.push(webPath)
            } else {
                dbFiles.push(urls[i])
            }
        }
        let data = {
            cn: {
                name: name_cn,
                content: content_cn,
            },
            en: {
                name: name_en,
                content: content_en,
            },
            files: dbFiles,
            time: time,
            type: type
        }

        let result = await db.Project.update({"_id": id}, {
            "$set": data
        })
        output(ctx, result)
    } else {//添加项目
        webDir = '/static/upload/project/' + util.converToCNDate().replace(/[-: ]/g, '')
        let result = await file.mkDir(process.cwd() + webDir)
        if (result != 1) {
            return ctx.body = {"status": 10, "message": result}
        }
        webDir = webDir + '/'
        for (let i = 0; i < urls.length; i++) {
            let filePath = files['file' + i].path //requset中的图片存放地址
            let webPath = `${webDir}${i}_${files['file' + i].name}` //网站文件图片存放地址
            await file.move(filePath, process.cwd() + webPath) //从临时目录移动到网站目录,成功返回1，失败返回error对象
            dbFiles.push(webPath)
        }
        let data = {
            cn: {
                name: name_cn,
                content: content_cn,
            },
            en: {
                name: name_en,
                content: content_en,
            },
            files: dbFiles,
            time: time,
            type: type
        }
        let p = new db.Project(data)
        result = null
        result = await p.save()
        output(ctx, result)
    }
}


function output(ctx, result) {
    if (result instanceof Error) {
        ctx.body = {"status": 10, "message": result}
    } else {
        ctx.body = {"status": 0, "message": '', "data": result}
    }
}

