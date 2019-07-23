const http = require('http')
const url = require('url')
const querystring = require('querystring')
const connect = require('connect')
const bodyParser = require('body-parser')
const router = require('./router')

const app = connect()
app
  .use((req, res, next) => {
    const Url = url.parse(req.url)
    req.query = querystring.parse(Url.query)
    next()
  })
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(router)

http.createServer(app).listen(3000)
