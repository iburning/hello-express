// const model = require('../model/blog')
// const service = require('../service/blog')

const list = [
  {
    id: 1,
    title: 'This is my first blog title',
    content: '<p><strong>HTML</strong> bolg content test</p>'
  },
  {
    id: 2,
    title: 'Hello Express',
    content: '<p><strong>HTML</strong> bolg content test</p>'
  },
  {
    id: 3,
    title: '这是一个中文标题',
    content: '<p><strong>HTML</strong> bolg content test</p>'
  }
]

module.exports = {
  getList(req, res) {
    res.render('blogIndex', { list })
  },

  getDetail(req, res, next) {
    const { id } = req.params
    const detail = list[(parseInt(id, 10) || 0) - 1]
    res.render('blogDetail', { detail })
  },

  // 传统的回调方式
  getDetail01(req, res, next) {
    const { id } = req.params

    model.getDetail({ id }, (err, data) => {
      if (err) {
        next(err)
      } else {
        res.render('blogDetail', { detail: data })
      }
    })
  },

  // 使用Promise
  async getDetail02(req, res, next) {
    const { id } = req.params

    try {
      const data = await service.getDetail({ id })
      res.render('blogDetail', { detail: data })
    } catch (err) {
      next(err)
    }
  }
}