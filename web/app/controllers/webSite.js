var db = require("../db/Schema");

module.exports.home = async(ctx, next)=> {
    let banner = await db.HomeBanner.find({status: 1}, 'img').sort({index: 1})
    let setting=await db.WebSetting.findOne({key: 'homeBanner'}, 'value')
    await ctx.render('index', {bannerList: banner, router: ctx.request.url, menus: ctx.menus,setting:setting.value})
}

module.exports.list = async(ctx, next)=> {
    let list = []
    for (let i = 11411; i < 11611; i++) {
        list.push({
            id: i,
            content: "子模板嵌套除了可以引入在数据中指定的子模板外，也可以通过指定字符串`#id`使用写在`script`标签中的模板代码.",
            img: "http://art.team-lab.cn/images/sp-s/" + i
        })
    }
    await ctx.render('list', {list: list, router: ctx.request.url, menus: ctx.menus})
}

module.exports.teamminus = async(ctx, next)=> {
    let data= await db.WebSetting.findOne({key: 'teamminus'},'value.'+ctx.session.language)
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
    let data=await db.JoinUs.find({status:1},ctx.session.language).sort({index:1})
    let list=[]
    data.forEach(item=>{
        list.push({
            title:item[ctx.session.language].title,
            children:item[ctx.session.language].children
        })
    })
    await ctx.render('joinUs', {
        content: list, router: ctx.request.url, menus: ctx.menus
    })
}

module.exports.contact = async(ctx, next)=> {
    let result=await db.WebSetting.findOne({"key":'contact'})
    if(!(result instanceof Error)){
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

