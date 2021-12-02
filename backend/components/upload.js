const path = require('path')
const fs = require('fs')
module.exports = (ctx)=>{
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path)
    const writerPath = path.join(process.cwd(),'public/images') + `/${file.name}`   //文件名输出是\而不是/，但写的时候都是/
    const writer = fs.createWriteStream(writerPath)
    reader.pipe(writer)
    ctx.body = '上传成功'
}