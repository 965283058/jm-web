const fs = require("fs");
const exec = require('child_process').exec
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
        fs.access(path, function (err, result) {
            if (err) {
                rev(1)
            } else {
                fs.unlink(path, function (err) {
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

exports.mkDir = (path)=> {
    return new Promise((rev, rej)=> {
        fs.mkdir(path, function (err) {
            if (err) {
                rej(err)
            } else {
                rev(1)
            }
        });
    })
}
exports.delete = (path)=> {
    return new Promise((rev, rej)=> {
        fs.access(path, function (err, result) {
            if (err) {
                rev(1)
            } else {
                fs.unlink(path, function (err) {
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
exports.exists = (path)=> {
    return new Promise((rev, rej)=> {
        fs.access(path, function (err, result) {
            if (err) {
                rev(false)
            } else {
                rev(true)
            }
        })

    })
}

exports.rmDir = (path)=> {
    return new Promise((rev, rej)=> {
        exec('rm -rf ' + path, function (err, out) {
            if (err) {
                rej(err)
            } else {
                rev(1)
            }
        });
    })
}