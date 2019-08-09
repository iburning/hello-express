const Router = require('router')

const router = Router()

viewBlog = function (params, res) {
  const { id } = params
  res.end(`<h1>Page Blog</h1><p>bolg id = ${id}</p>`)
}

router.get('/', (req, res) => {
  res.end('<h1>Page Home</h1><p>hello world</p>')
})

router.get('/blog', (req, res) => {
  console.log(req.query)
  const { id } = req.query
  viewBlog({ id }, res)
})

router.get('/blog/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params
  viewBlog({ id }, res)
})

router.get('/about', (req, res) => {
  res.end('<h1>Page About</h1>')
})

router.post('/login', (req, res) => {
  console.log(req.body)
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

router.get('/*', (req, res) => {
  res.statusCode = 404
  res.end('<h1>Page Not Found</h1>')
})

module.exports = router