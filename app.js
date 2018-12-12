var createError = require('http-errors');
var fs = require('fs');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let secret = require('./token').secret;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const jwt = require('jsonwebtoken')

var app = express();

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200); //让options尝试请求快速结束
  else
    next();
})
// app.use(expressJwt({
//   secret: secret
// }).unless({
//   path: ['/users/login'] //不需要token验证地址
// }))



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

// //校验token 
app.use((req, res, next) => {
//   let token = req.query.token;
//   // console.log(req.route)
//   console.log(req.path)
//  console.log('中间件失效')
//   if (req.path !== '/users/login') {
//     jwt.verify(token, secret, (err, decoded) => {
//       if (!err) {
//         console.log(err)
//         console.log(decoded)
//       } else {
//         // console.log(res.send)
//         // res.status(err.status || 500);
//         console.log(res)
//            fs.writeFile(path.join(__dirname, 'log') + 'req.txt', res.app, (err) => {
//               if(err) {
//                 console.log(err)
//               } else {
//                 console.log('写入成功')
//               }
//            })
  
//         res.code = 405;
//         res.token = 'token失效';
//       }
//     })
//   }
  next()

})

// var requestTime = function (req, res, next) {
//   console.log('嗯我哈哈哈哈哈')
//   req.requestTime = Date.now()
//   next()
// }
// app.use(requestTime)

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/module', express.static(path.join(__dirname, 'public/module.html')));

app.use('/api', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');

  // next()
});

module.exports = app;