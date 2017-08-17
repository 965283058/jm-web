let router=require('koa-router')()
let webMenu=require('../app/controllers/manage/webMenu')
let home=require('../app/controllers/manage/home')
let people=require('../app/controllers/manage/people')
let join=require('../app/controllers/manage/join')




router.get('/webMenu/list',webMenu.list)
router.post('/webMenu/edit',webMenu.edit)

router.get('/homeBanner/list',home.list)
router.post('/homeBanner/edit',home.edit)
router.post('/homeBanner/del',home.del)

router.get('/people/list',people.list)
router.post('/people/edit',people.edit)
router.post('/people/del',people.del)


router.get('/join/list',join.list)
router.post('/join/edit',join.edit)
router.post('/join/del',join.del)

module.exports=router
