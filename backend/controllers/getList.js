const path = require('path')
const fs = require('fs')
module.exports = async (ctx)=>{
    const originUrl = ctx.origin
    const imgListPath = path.join(__dirname,'..','public/images')
    await new Promise((resolve)=>{                                //fs Promise
        fs.readdir(imgListPath,(err,files)=>{
            let list = files.map((item)=>{
                return `${originUrl}/api/getImg?img=${item}`
            })
            ctx.body=list
            resolve()
        })
    })
}