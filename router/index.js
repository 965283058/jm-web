let router=require('koa-router')()
const webSite=require('../app/controllers/webSite')
const manage=require('./manage')


router.use('/manage',manage.routes(),manage.allowedMethods())

router.get('/list',webSite.list)

router.get('/project/:id',webSite.projectByType)

router.get('/project',webSite.project)

router.get('/teamminus',webSite.teamminus)

router.get('/people',webSite.people)

router.get('/join_us',webSite.joinUs)

router.get('/contact',webSite.contact)

router.get('/video/:id',webSite.video)

router.get('/',webSite.home)


module.exports=router
