const Router = require('@koa/router')
const router = new Router()

const getList = require('../components/getList')
const getImg = require('../components/getImg')
const upload = require('../components/upload')
const deleteImg = require('../components/deleteImg')

router.get('/api/getList',getList)
router.get('/api/getImg',getImg)
router.get('/api/deleteImg',deleteImg)
router.post('/api/upload',upload)


module.exports=router