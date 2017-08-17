let koa = require('koa2');
let app = new koa();
let router = require('./router/index')
let render = require('koa-ejs')
let path = require('path')
let static = require('koa-static')
let menu = require('./app/controllers/menu')
const koaBody = require('koa-body')
const session = require('koa-session')
render(app, {
    root: path.join(__dirname, 'view'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: false
});
app.use(static(__dirname))
app.use(koaBody({multipart: true}))
app.use(async(ctx, next)=> {
    if (ctx.req.method == "GET") {
        let body = {}
        if (ctx.request.url.indexOf('?') != -1) {
            let query = ctx.request.url.split('?')[1]
            let params = query.split("&")

            let temp
            params.forEach((item)=> {
                temp = item.split('=')
                body[temp[0]] = temp[1] || ''
            })
        }
        ctx.req.body = body
    }
    await next()
})
app.keys = ['some secret hurr'];

app.use(session({
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
}, app));

app.use(async(ctx, next)=> {
    if (!ctx.session.language) {
        ctx.session.language = 'cn'
    }
    let oldPath = ctx.request.header.referer
    if (ctx.request.url == "/cn") {
        ctx.session.language = 'cn'
        ctx.redirect(oldPath)
    } else if (ctx.request.url == "/en") {
        ctx.session.language = 'en'
        ctx.redirect(oldPath)
    } else {
        await next()
    }

})

app.use(menu)

app.use(async(ctx, next)=> {
    try {
        await next()
    } catch (e) {
        ctx.body = {status: "50", message: e.message}
    }
})

app.use(async(ctx, next)=> {
    ctx.serverOrigin = 'http://127.0.0.1:9999'
    await next()
})

app.use(router.routes(), router.allowedMethods())


app.listen(9999);