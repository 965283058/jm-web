var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var db = mongoose.createConnection('127.0.0.1', 'jm'); //创建一个数据库连接


//前台菜单
var webMenutSchema = new Schema({
    menu: String,
    cn: String,
    en: String,
    index: Number,  //索引
    status: Number,  //0禁用 1正常
});
exports.webMenu = db.model('webMenu', webMenutSchema);


//首页Banner图
var HomeBannerSchema = new Schema({
    img: String,
    index: Number,
    status: Number, //0禁用 1正常
});

exports.HomeBanner = db.model('HomeBanner', HomeBannerSchema);

//人物介绍
var PropleSchema = new Schema({
    img: String,
    cn: {
        name: String,
        longName: String,
        title: String,
        profile: String
    },
    en: {
        name: String,
        longName: String,
        title: String,
        profile: String
    },
    index: Number,
    status: Number //0禁用 1正常
});


exports.Prople = db.model('Prople', PropleSchema);


//加入我们
var JoinUsSchema = new Schema({
    index: Number,
    status: Number, //0禁用 1正常
    cn: {
        title: String,
        children: Array
    },
    en: {
        title: String,
        children: Array
    }
});
exports.JoinUs = db.model('JoinUs', JoinUsSchema);

//网站配置
var WebSettingSchema = new Schema({
    key: {type: String, unique: true},
    value: Object
});
exports.WebSetting = db.model('WebSetting', WebSettingSchema);


//管理员
var AdminSchema = new Schema({
    email: {type: String, unique: true},
    name: String,
    pwd: String,
    errCount: {type: Number, default: 0},
    superAdmin: Number, // 0普通管理员 1超级管理员
    power: [String],
    status: Number, //-1 删除 0禁用 1正常
    pwdStatus: {type: Number, default: 0},//0 新密码，未重置 1正常
    creator: {type: Schema.Types.ObjectId, ref: 'Admin', default: null},
    createTime: {type: Number, default: Date.now()},
    lastLoginTime: Number
});
exports.Admin = db.model('Admin', AdminSchema);

//菜单
var MenuSchema = new Schema({
    text: String,
    code: String,
    icon: String,
    parentId: String,
    index: Number
});
exports.Menu = db.model('Menu', MenuSchema);


var VideoSchema = new Schema({
    text: String,
    url: String
});
exports.Video = db.model('Video', VideoSchema);


//项目
var ProjectSchema = new Schema({
    name: {
        cn: String,
        en: String
    },
    files: [{
        url: String,
        cn: String,
        en: String
    }],
    time: {type: Number, default: Date.now()},
    type: Number
});
exports.Project = db.model('Project', ProjectSchema);