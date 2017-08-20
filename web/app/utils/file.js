var fs = require("fs");
exports.move = async(oldPath, newPath)=> {
    return new Promise((rev, rej)=> {
        fs.rename(oldPath, newPath, function (err, data) {
            if (err) {
                rej(err)
            } else {
                rev(1)
            }
        })
    })
}




exports.delete = (path)=> {
    return new Promise((rev, rej)=> {
        fs.access(path,function (err,result) {
            if(err){
                rev(1)
            } else{
                fs.unlink(path,function (err) {
                    if (err) {
                        rej(err)
                    } else {
                        rev(1)
                    }
                })
            }
        })

    })
}