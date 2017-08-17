var db = require("../db/Schema");

module.exports.home = async(ctx, next)=> {
    let banner = await db.HomeBanner.find({status: 1}, 'img').sort({index: 1})
    await ctx.render('index', {bannerList: banner, router: ctx.request.url, menus: ctx.menus})
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
    await ctx.render('teamminus', {
        menus: ctx.menus,
        router: ctx.request.url,
        img: '../static/img/trondy.png',
        content: 'Founded by Professor Li Brian Zhang, TeamMinus started as a design research laboratory in 2001. In 2005, TeamMinus became a full-fledge architecture office. Today, there are around 50 people working in the office.From 2005 up to now, TeamMinus has been involved in a series of challenging projects. Many of which have gained attention from China and from overseas. These projects range from large-scale event buildings, such as the Main Venue for the National Flower Show (2009) and the Roof Gardens of China Pavilion in Shanghai Expo (2010), to modest local facilities for culture and community, such as Jinchang Culture Center '
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
    await ctx.render('contact', {
        data: {
            address: ['Rm 815. d B. Dongsheng Plaza.', 'Wu-Dao-Kou, Beijing 10083. China'],
            tel: ['T 86.10.5177.9958-800', 'F 86.10.5177.9956'],
            email: ['master@teamminus.com', 'hr@teamminus.com'],
            weibo: ['Sina Weibo', '@teamminus'],
            weiboUrl: 'http://weibo.com/'
        },
        router: ctx.request.url,
        menus: ctx.menus
    })
}

