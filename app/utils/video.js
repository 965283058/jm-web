const fs = require("fs")
const path = require('path')

module.exports = function () {
    return async(ctx, next)=> {
        if (/\.mp4$/.test(ctx.path)) {
            let match = ctx.request.header && ctx.request.header['range']
            let url = decodeURI(path.resolve(process.cwd() + ctx.path))
            let bf = await read(match, url,ctx)
            ctx.status = 206
            ctx.body=bf
            ctx.type="video/mp4"
            return
        }
        await next()
    }
}

let read = async(match, url,ctx)=> {
    let bytes = match.split("=")[1]
    let stats = fs.statSync(url)
    let start = bytes.split("-")[0]
    let end = (bytes.split("-")[1])||stats.size


    let length = (end - start)+1
    if (stats.isFile()) {
        console.info(match,length)
        let bf =  Buffer.alloc(length)
        let n = fs.openSync(url, 'r')
        ctx.set("Content-Range",`bytes ${start}-${end}/${stats.size}`)
        ctx.set("Accept-Ranges",`bytes`)

        return new Promise((rev, rej)=> {
            fs.read(n, bf, 0, length, start, function (err, bytesRead, buffer) {
                fs.closeSync(n)
                rev(buffer)
            })
        })
    }

}