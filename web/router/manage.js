let router=require('koa-router')()
let webMenu=require('../app/controllers/manage/webMenu')
let home=require('../app/controllers/manage/home')
let people=require('../app/controllers/manage/people')
let join=require('../app/controllers/manage/join')
let webSetting=require('../app/controllers/manage/webSetting')
let teamminus=require('../app/controllers/manage/teamminus')
let admin=require('../app/controllers/manage/admin')
let menu=require('../app/controllers/manage/menu')
let video=require('../app/controllers/manage/video')
let project=require('../app/controllers/manage/project')



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

router.get('/webSetting/getInfo',webSetting.get)
router.post('/webSetting/edit',webSetting.edit)


router.get('/teamminus/getInfo',teamminus.getInfo)
router.post('/teamminus/edit',teamminus.edit)


router.get('/admin/list',admin.list)
router.post('/admin/edit',admin.edit)
router.post('/admin/del',admin.del)
router.post('/admin/resetPwd',admin.resetPwd)
router.post('/admin/changePwd',admin.changePwd)



router.get('/menu/treeMenu',menu.getTreeMenu)
router.post('/menu/edit',menu.edit)


router.post('/login',admin.login)
router.post('/admin/logout',admin.logout)


router.get('/video/list',video.list)
router.post('/video/edit',video.edit)
router.post('/video/del',video.del)

router.get('/project/list',project.list)
router.post('/project/edit',project.edit)
router.post('/project/del',project.del)

module.exports=router
