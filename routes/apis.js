var express = require('express');
var router = express.Router();
var indexApis = require('../controllers/apis/index')

/* GET home page. */
router.get('/', indexApis.index);
router.post('/demo', indexApis.demo);

module.exports = router;