const Koa = require('koa')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const views = require('koa-views')
const path = require('path')

const app = new Koa()

// const webpack = require('webpack')
// const webpackConf = require('../webpack.config')
// const WebpackDevServer = require('webpack-dev-server')
// if (process.env.NODE_ENV != 'prod') {
//     let webpackDevServer = new WebpackDevServer(webpack(webpackConf), webpackConf.devServer)
//     webpackDevServer.listen(8080, "localhost", () => {
//         console.log('Listening on port 8080!')
//     })
// } else {
//     // webpack-dev-server serves all static assets from memory in development mode
//     app.use(koaStatic(path.join(__dirname, '../dist/')))    
// }

app.use(logger())   
app.use(views(path.join(__dirname, '../dist/')))
app.use(async(ctx) => {
    await ctx.render('index')
})

// const server = require('http').createServer(app.callback())
// const io = require('socket.io')(server)
// io.on('connection', () => {
//     console.log('connect')
// })

app.listen(7000)