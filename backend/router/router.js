const Router = require('@koa/router')
const fs = require('fs')
const path = require('path')
const router = new Router()
const { readdir } = require('fs/promises')
router.get('/api/getList',async (ctx)=>{
    const originUrl = ctx.origin
    const imgPath = path.resolve(process.cwd(),'public/images')
    let list = await readdir(imgPath)
    list = list.map((item)=>{
        return `${originUrl}/api/getImg?img=${item}`
    })
    ctx.body=list
})


router.get('/api/getImg',async (ctx)=>{
    ctx.set('Content-Type','image/jpeg')
    const img = ctx.query.img
    const imgPath = path.join(process.cwd(),'public/images')+ `/${img}`
    await new Promise((resolve)=>{
        fs.readFile(imgPath,(err,data)=>{
            ctx.body = data
            resolve()
        })
    })
})
router.post('/api/upload',(ctx)=>{
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path)
    const writerPath = path.join(process.cwd(),'public/images') + `/${file.name}`   //文件名输出是\而不是/，但写的时候都是/
    const writer = fs.createWriteStream(writerPath)
    reader.pipe(writer)
    ctx.body = '上传成功'
})
module.exports=router