const fs = require('fs')
const path = require('path')
module.exports = async (ctx)=>{
    const img = ctx.query.img
    const imgPath = path.join(process.cwd(),'public/images')+ `/${img}`
    await new Promise((resolve)=>{
        fs.unlink(imgPath,(err)=>{
            if(err) {
                ctx.body = '删除失败，不存在该文件'
                resolve()
            } else {                //不加else的话resolve之后还是会执行下面的语句   调用resolve或reject并不会终结 Promise 的参数函数的执行  最好在它们前面加上return语句
                ctx.body = '删除成功'
                resolve()
            }

        })
    })
}