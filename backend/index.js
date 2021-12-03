const Koa = require('koa')
const app = new Koa()
const router = require('./router/router')
const koaBody = require('./utils/koaBody')

app.use(koaBody)
app.use(router.routes())
app.listen(5000)
console.log('server is running at 5000 port')
