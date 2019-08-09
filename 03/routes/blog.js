const express = require('express');
const controller = require('../controller/blog');
const router = express.Router();

router.get('/', controller.getList);
router.get('/detail/:id', controller.getDetail);

module.exports = router;
