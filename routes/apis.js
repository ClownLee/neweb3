var express = require('express');
var router = express.Router();
var indexApis = require('../controllers/apis/index')

/* GET home page. */
router.get('/', indexApis.index);
router.get('/demo', indexApis.demo);
router.get('/caonima', indexApis.caonima);

module.exports = router;