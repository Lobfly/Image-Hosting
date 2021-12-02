const path = require('path')
const fs = require('fs')
module.exports = async (ctx)=>{
    ctx.set('Content-Type','image/jpeg')
    const img = ctx.query.img
    const imgPath = path.join(process.cwd(),'public/images')+ `/${img}`
    await new Promise((resolve)=>{
        fs.readFile(imgPath,(err,data)=>{
            ctx.body = data
            resolve()
        })
    })
}