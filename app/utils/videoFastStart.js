const fastStart = require("faststart")
const fs = require("fs")
const file = require("./file")

module.exports = (path)=> {
    return new Promise((rev, rej)=> {
        let newPath = path.replace(".mp4", "-faststart.mp4")
        let out = fs.createWriteStream(newPath)
        fastStart.createReadStream(path).pipe(out).on('error', function (e) {
            rej(path)
        }).on("finish", function () {
            file.delete(path)
            rev(newPath)
        })
    })
}
