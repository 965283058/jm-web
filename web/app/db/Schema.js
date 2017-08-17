var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise
var db = mongoose.createConnection('127.0.0.1', 'jm'); //创建一个数据库连接

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/jm';


//前台菜单
var webMenutSchema = new Schema({
    menu: String,
    cn: String,
    en: String,
    index: Number,  //索引
    status:Number,  //0禁用 1正常
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
        title:String,
        profile: String
    },
    en: {
        name: String,
        longName: String,
        title:String,
        profile: String
    },
    index:Number,
    status:Number //0禁用 1正常
});


exports.Prople = db.model('Prople', PropleSchema);


//加入我们
var JoinUsSchema = new Schema({
    index:Number,
    status:Number, //0禁用 1正常
    cn: {
        title: String,
        children:Array
    },
    en: {
        title: String,
        children:Array
    }
});
exports.JoinUs = db.model('JoinUs', JoinUsSchema);
