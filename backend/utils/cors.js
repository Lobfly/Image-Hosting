const cors = require('koa2-cors')
module.exports = cors({
    origin: function (ctx) {
        if (ctx.url.indexOf('/api/v0') > -1) {
            return '*' // 允许来自所有域名请求
        }
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], // 获取额外的header信息
    maxAge: 5, //  该字段可选，用来指定本次预检请求的有效期，单位为秒
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'], // 请求允许的方法
    allowHeaders: [
        'Content-Type',
        'Authorization',
        'Accept',
        'x-requested-with',
    ], // 允许的header字段名
})