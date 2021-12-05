const Router = require('@koa/router')
const router = new Router()

const { getList, getImg, deleteImg, upload} = require('../controllers/index')

router.get('/api/getList',getList)
router.get('/api/getImg',getImg)
router.get('/api/deleteImg',deleteImg)
router.post('/api/upload',upload)


module.exports=router