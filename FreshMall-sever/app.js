const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const cors = require('koa2-cors')


const user = require('./routes/user');
// error handler
onerror(app);
// 用于加密session配置的秘钥
app.keys = ['skds~^)7293SA']
app.use(session({
    // 配置cookies
    cookie: {
        path: '/',
        httpOnly: true, //只能通过后端修改cookie，不允许 前端JS修改
        maxAge: 24 * 60 * 60 * 1000
    }
}))

// 跨域设置,
app.use(cors({
    origin: '*', //前端的地址
    credentials: true, //允许跨域带cookie
}))

/
// middlewares

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))


// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes definition
app.use(user.routes(), user.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app;