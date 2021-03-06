const http = require('http')
const querystring = require('querystring')
const url = require('url')
const jsonBody = require('body/json')

const server = http.createServer()

server.on('request', (req, res) => {
  const Url = url.parse(req.url)
  const query = querystring.parse(Url.query)

  // console.log(Url, query)
  switch (Url.pathname) {
    case '/':
      res.end('<h1>Page Home</h1><p>hello world</p>')
      break

    case '/blog':
      res.end(`<h1>Page Blog</h1><p>bolg id = ${query.id}</p>`)
      break

    case '/about':
      res.end('<h1>Page About</h1>')
      break

    case '/login':
      jsonBody(req, res, (err, body) => {
        if (err) {
          console.warn('jsonBody ERROR', err)
          return
        }

        console.log(body)
        // todo:
        // validate
        // model.login

        res.end(JSON.stringify({
          code: 200,
          message: 'success',
          data: {
            user_id: '1221',
            token: 'user_token'
          }
        }))
      })
      break

    default:
      res.statusCode = 404
      res.end('<h1>Page Not Found</h1>')
  }
})

server.on('error', err => {
  console.warn('error', err)
})

server.listen(3000)
