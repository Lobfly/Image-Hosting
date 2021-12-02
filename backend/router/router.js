const Router = require('@koa/router')
const router = new Router()

const getList = require('../components/getList')
const getImg = require('../components/getImg')
const upload = require('../components/upload')

router.get('/api/getList',getList)
router.get('/api/getImg',getImg)
router.post('/api/upload',upload)

module.exports=router