const http = require('http')
const url = require('url')
const querystring = require('querystring')
const connect = require('connect')

// const server = http.createServer()

const app = connect()
// console.log(app) 
// console.log('use', app.use) // 注意 wrap sub-apps 的实现

app.use((req, res, next) => {
  console.log(1, req.url)
  req.test = 'TEST'
  next()
})

// app.use((req, res) => {
//   console.log(2, req.test)
//   res.end('hello connect')
// })

app.use((req, res, next) => {
  console.log('/', req.url)
  if (req.url === '/') {
    res.end('<h1>Page Home</h1><p>hello world</p>')
  } else {
    next()
  }
})

app.use('/blog', (req, res, next) => {
  const Url = url.parse(req.url)
  const query = querystring.parse(Url.query)
  console.log('/blog', query)
  res.end(`<h1>Page Blog</h1><p>bolg id = ${query.id}</p>`)
})

app.use('/about', (req, res, next) => {
  console.log('/about')
  res.end('<h1>Page About</h1>')
})

app.use((req, res, next) => {
  console.log('/*')
  res.statusCode = 404
  res.end('<h1>Page Not Found</h1>')
})

http.createServer(app).listen(3000)
