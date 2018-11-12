var express = require('express');
var router = express.Router();
let login = require('../api/login')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.all('/login', login);

module.exports = router;
