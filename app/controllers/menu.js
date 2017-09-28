const db = require("../db/Schema");
module.exports = async(ctx, next)=> {
    let cols = 'menu ' + ctx.session.language
    let data = await db.webMenu.find({status: 1}, cols).sort({index: 1})
    let menus = []
    data.forEach((item)=> {
        let m = {
            text: item[ctx.session.language],
            router: item.menu
        }
        if (m.router == '/project') {
            if (ctx.session.language == 'cn') {
                m.children = [{text: '小', type: 1}, {text: '中', type: 2}, {text: '大', type: 3}]
            } else {
                m.children = [{text: 'SMALL', type: 1}, {text: 'MEDIUM', type: 2}, {text: 'LARGE', type: 3}]
            }

        }
        menus.push(m)
    })
    ctx.menus = menus
    await next()
}


