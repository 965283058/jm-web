let fs = require("fs")

module.exports = async(ctx, next)=> {
    let url = ctx.request.url
    if (url.indexOf("/manage") == 0 && url != "/manage/login") {
        if (ctx.session.admin == null) {
            return ctx.body = {status: -100, message: '登录超时！'}
        }
    }
    await next()
}

async function readFile(filepath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, function (err, result) {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}
