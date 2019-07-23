const http = require('http')
const connect = require('connect')
const router = require('./router')

const app = connect()
app.use(router)

http.createServer(app).listen(3000)
