let router=require('koa-router')()

let webSite=require('../app/controllers/webSite')

let manage=require('./manage')


router.use('/manage',manage.routes(),manage.allowedMethods())

router.get('/list',webSite.list)

router.get('/project/:id',webSite.projectByType)

router.get('/project',webSite.project)

router.get('/teamminus',webSite.teamminus)

router.get('/people',webSite.people)

router.get('/join_us',webSite.joinUs)

router.get('/contact',webSite.contact)

router.get('/',webSite.home)


module.exports=router
