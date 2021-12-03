const fs = require('fs')
const path = require('path')
module.exports = async (ctx)=>{
    const originUrl = ctx.origin
    const imgPath = path.resolve(process.cwd(),'public/images')
    await new Promise((resolve)=>{                                //fs Promise
        fs.readdir(imgPath,(err,files)=>{
            let list = files.map((item)=>{
                return `${originUrl}/api/getImg?img=${item}`
            })
            ctx.body=list
            resolve()
        })
    })
}