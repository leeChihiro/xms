const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("./jwt");
// 路由器
const userRouter = require('./routes/userRouter');

/* 服务器
   ========================================================================== */
const server = express();
server.listen(9999);

/* 中间件
   ========================================================================== */
//使用第三方的qs，不使用自带的
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// 跨域
server.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true
  })
);
// token加密
server.use((req, res, next) => {
  if (req.url.startsWith("/user") && !req.url.startsWith("/user/login")) {
    let token = req.headers.token;
    let result = jwt.verifyToken(token);
    if (result == undefined) {
      res.send({ status: 403001, msg: "未提供证书" });
    } else if (result.name == "TokenExpiredError") {
      res.send({ status: 403002, msg: "登陆超时，请重新登陆" });
    } else if (result.name == "JsonWebTokenError") {
      res.send({ status: 403003, msg: "证书出错" });
    } else {
      req.user = result;
      next();
    }
  } else {
    next();
  }
});

// 配置路由器
server.use('/user',userRouter); //把路由器挂载到/user下 
