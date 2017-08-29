let koa = require('koa2');
let app = new koa();
let router = require('./router/index')
let render = require('koa-ejs')
let path = require('path')
let static = require('koa-static')
let menu = require('./app/controllers/menu')
const adminPower = require('./app/controllers/adminPower')
const koaBody = require('koa-body')
const queryString = require('./app/utils/queryString')
const session = require('koa-generic-session')

render(app, {
    root: path.join(__dirname, 'view'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: false
});
app.use(static(__dirname))
app.use(koaBody({multipart: true}))
app.use(queryString)
app.keys = ['some secret hurr'];

app.use(session({
    key: 'jmAdminSid',
    maxAge: (1000 * 60 * 20),//20分钟session超时
    overwrite: false,
    httpOnly: true,
    rewrite: true,
    signed: true
}, app));


app.use(async(ctx, next)=> {
    if (!ctx.session.language) {
        ctx.session.language = 'cn'
    }
    let oldPath = ctx.request.header.referer || '/'
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


//后台权限检查
app.use(adminPower)

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