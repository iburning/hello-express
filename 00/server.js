const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  res.end('hello world')
})

server.on('error', err => {
  console.warn('error', err)
})

server.listen(3000)
