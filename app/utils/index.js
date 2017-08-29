exports.converToCNDate = (ms = Date.now(), format = 'datetime') => {
    var date = new Date(ms);
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();

    switch (format) {
        case "datetime":
            return year + "-" + padLeft(month) + "-" + padLeft(day) + " " + padLeft(hh) + ":" + padLeft(mm) + ":" + padLeft(ss);
        case "date":
            return year + "-" + padLeft(month) + "-" + padLeft(day);
        case "time":
            return padLeft(hh) + ":" + padLeft(mm) + ":" + padLeft(ss);
        default :
            return "";
    }

    function padLeft(number) {
        if (parseInt(number) < 10) {
            return '0' + number;
        }
        return number;
    }
}

exports.guid = ()=> {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}