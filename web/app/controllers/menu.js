let db = require("../db/Schema");
module.exports = async(ctx, next)=> {

    let cols = 'menu ' + ctx.session.language
    let data = await db.webMenu.find({status: 1}, cols).sort({index: 1})
    let menus = []
    data.forEach((item)=> {
        menus.push({
            text:item[ctx.session.language],
            router:item.menu
        })
    })

    ctx.menus = menus
    await next()
}


