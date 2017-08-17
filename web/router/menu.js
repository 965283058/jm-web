let router=require('koa-router')()
let user_ctl=require('../app/controllers/list')

router.get('/list',user_ctl.getList)

module.exports=router
