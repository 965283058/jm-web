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


exports.guid = ()=> {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

exports.delete = (path)=> {
    console.info(path)
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