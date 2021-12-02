const Koa = require('koa')
const app = new Koa()
const router = require('./router/router')
const cors = require('koa2-cors')
const koaBody = require('koa-body')

app.use(
	cors({
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
)
app.use(
	koaBody({
		multipart: true,
		formidable: {
			maxFileSize: 200 * 1024 * 1024,
		},
	})
)
app.use(router.routes())
app.listen(5000)
console.log('server is running at 5000 port')
