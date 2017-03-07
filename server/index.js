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

if (process.env.NODE_ENV == 'prod') {
    app.use(koaStatic(path.join(__dirname, '../dist/')))
}

app.use(logger())   
app.use(views(path.join(__dirname, './views/')))
app.use(async(ctx) => {
    if (process.env.NODE_ENV == 'prod') {
        await ctx.render('index_prod')
    } else {
        await ctx.render('index_dev')
    }
})

const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)
io.on('connection', () => {
    console.log('connect')
})

server.listen(7000)