const http = require('http')
const querystring = require('querystring')

const server = http.createServer()

server.on('request', (req, res) => {
  const [url, query_string] = req.url.split('?')
  const query = querystring.parse(query_string)

  console.log(req.url, url, query)
  switch (url) {
    case '/':
      res.end('<h1>Page Home</h1><p>hello world</p>')
      break

    case '/blog':
      const id = query.id
      res.end(`<h1>Page Blog</h1><p>bolg id = ${id}</p>`)
      break

    case '/about':
      res.end('<h1>Page About</h1>')
      break

    default:
    res.end('<h1>Page Not Found</h1>')
  }
})

server.on('error', err => {
  console.warn('error', err)
})

server.listen(3000)
