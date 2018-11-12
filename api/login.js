
const jwt = require('jsonwebtoken')
let app = require('express')();
let db = require('../mongooes/db.js')
let secret = require('../token.js').secret;
function login(req, res, next) {

  let token = jwt.sign({
    name : req.query.name
  },secret,{
    expiresIn : 3600
  })
  db.info(req.query,token).then(data => {
    res.send(data)
  })

  
}

module.exports = login