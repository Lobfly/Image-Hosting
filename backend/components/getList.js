const { readdir } = require('fs/promises')
const path = require('path')
module.exports = async (ctx)=>{
    const originUrl = ctx.origin
    const imgPath = path.resolve(process.cwd(),'public/images')
    let list = await readdir(imgPath)
    list = list.map((item)=>{
        return `${originUrl}/api/getImg?img=${item}`
    })
    ctx.body=list
}