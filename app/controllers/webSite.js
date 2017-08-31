var db = require("../db/Schema");

module.exports.home = async(ctx, next)=> {
    let banner = await db.HomeBanner.find({status: 1}, 'img').sort({index: 1})
    let setting = await db.WebSetting.findOne({key: 'homeBanner'}, 'value')
    await ctx.render('index', {bannerList: banner, router: ctx.request.url, menus: ctx.menus, setting: setting.value})
}


module.exports.teamminus = async(ctx, next)=> {
    let data = await db.WebSetting.findOne({key: 'teamminus'}, 'value.' + ctx.session.language)
    await ctx.render('teamminus', {
        menus: ctx.menus,
        router: ctx.request.url,
        img: data.value[ctx.session.language].img,
        content: data.value[ctx.session.language].content
    })
}

module.exports.people = async(ctx, next)=> {
    let data = await db.Prople.find({status: 1}, 'img ' + ctx.session.language).sort({index: 1})
    let peoples = []
    data.forEach((item)=> {
        peoples.push({
            img: ctx.serverOrigin + item.img,
            name: item[ctx.session.language].name,
            longName: item[ctx.session.language].longName,
            title: item[ctx.session.language].title,
            content: item[ctx.session.language].profile,

        })
    })
    await ctx.render('people', {proples: peoples, router: ctx.request.url, menus: ctx.menus})
}

module.exports.joinUs = async(ctx, next)=> {
    let data = await db.JoinUs.find({status: 1}, ctx.session.language).sort({index: 1})
    let list = []
    data.forEach(item=> {
        list.push({
            title: item[ctx.session.language].title,
            children: item[ctx.session.language].children
        })
    })
    await ctx.render('joinUs', {
        content: list, router: ctx.request.url, menus: ctx.menus
    })
}

module.exports.contact = async(ctx, next)=> {
    let result = await db.WebSetting.findOne({"key": 'contact'})
    if (!(result instanceof Error)) {
        await ctx.render('contact', {
            data: {
                address: result.value[ctx.session.language].address,
                tel: result.value[ctx.session.language].tel,
                email: result.value[ctx.session.language].email,
                weibo: result.value[ctx.session.language].weibo,
                weiboURL: result.value.weiboURL,
            },
            router: ctx.request.url,
            menus: ctx.menus
        })
    }
}

module.exports.list = async(ctx, next)=> {
    let result = await db.Project.find().sort({"time": 1})
    if (!(result instanceof Error)) {
        let list = []
        for (let item of result) {
            let temp = []
            let imgUrl = ''
            let imgContent

            for(let file of item.files){
                if (file.url.split('.').pop().toLowerCase() != "mp4") {
                    imgUrl = file.url
                    imgContent = file[ctx.session.language]
                    break
                }
            }
            list.push({
                id: item._id,
                name: item.name[ctx.session.language],
                content: imgContent,
                img: imgUrl
            })
        }

        await ctx.render('list', {list: list, router: ctx.request.url, menus: ctx.menus})
    }

}

module.exports.project = async(ctx, next)=> {
    await queryProject(ctx, next)
}
module.exports.projectByType = async(ctx, next)=> {
    let type = ctx.params.id
    type = /^[0-9]+$/.test(type) ? type : null
    await queryProject(ctx, next, type)
}

let queryProject = async(ctx, next, type)=> {
    let where = {}
    if (type) {
        where.type = type
    }
    let result = await db.Project.find(where).sort({"time": -1})
    if (!(result instanceof Error)) {
        let list = []
        for (let item of result) {
            let temp = []
            item.files.forEach(file=> {
                temp.push({
                    url: ctx.serverOrigin + file
                })
            })
            list.push({
                id:item._id,
                name: item[ctx.session.language].name,
                content:item[ctx.session.language].content,
                time: item.time,
                type: item.type,
                files: temp
            })
        }
        await ctx.render('project', {
            list: list,
            router: '/project',
            menus: ctx.menus
        })

    }
}


module.exports.video = async(ctx, next)=> {
    let id = ctx.params.id
    let data = await db.Video.findOne({'_id':id})
    await ctx.render('video', {text:data.text,url:data.url})
}






