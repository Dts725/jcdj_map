var express = require('express');
var router = express.Router();

let token = require('../api/token_test')

/* GET home page. */
router.get('modul', function(req, res, next) {
    
});
router.all('/token_test',token)
// router.get('/api/login', login);

module.exports = router;
