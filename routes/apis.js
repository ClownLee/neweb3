var express = require('express');
var router = express.Router();
var indexApis = require('../controllers/apis/index')

/* GET home page. */
router.get('/', indexApis.index);
router.get('/getBalance', indexApis.getBalance);
router.get('/contract', indexApis.contract);

module.exports = router;