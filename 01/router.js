const Router = require('router')
const url = require('url')
const querystring = require('querystring')

const router = Router()

router.get('/', (req, res) => {
  res.end('<h1>Page Home</h1><p>hello world</p>')
})

router.get('/blog', (req, res) => {
  const Url = url.parse(req.url)
  const query = querystring.parse(Url.query)
  console.log('/blog', query)
  res.end(`<h1>Page Blog</h1><p>bolg id = ${query.id}</p>`)
})

router.get('/about', (req, res) => {
  res.end('<h1>Page About</h1>')
})

router.get('/*', (req, res) => {
  res.statusCode = 404
  res.end('<h1>Page Not Found</h1>')
})

module.exports = router