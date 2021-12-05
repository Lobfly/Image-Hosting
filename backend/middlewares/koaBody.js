const koaBody = require('koa-body')
module.exports = koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024,
    },
})