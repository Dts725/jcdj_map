// const expressJwt = require('express-jwt')
// const jwt = require('jsonwebtoken')
// let app = require('express')();

//定义签名
// const secret = 'self'

// //生成token

// const token = jwt.sign({
//         name: 'TAO',
//         pass: '123456',
//     },
//     secret, {
//         expiresIn: 6000
//     }
// );

// //中间件验证token有效性 

// app.use(expressJwt({
//     secret : secret
// }).unless ({
//     path : ['/login'] //不需要token验证地址
// }))


const msgInfo = {
    secret: 'ALL-ALLOW'
}
module.exports = msgInfo;