const express = require("express");
const pool = require("../pool");
const jwt = require("../jwt");
var router = express.Router();

router.post("/login", (req, res) => {
  let { uname, upwd } = req.body;
  pool.query(
    `
    SELECT
      user_info.uname,
      user_info.uid 
    FROM
      user_info 
    WHERE
      ( user_info.uname = ? OR user_info.email = ? ) 
      AND user_info.upwd = MD5(?)
    `,
    [uname, uname, upwd],
    (err, result) => {
      console.log(result);

      if (result && result.length > 0) {
        console.log(result);
        // 登录成功
        res.send({
          code: "600000",
          // 加密后的数据
          msg: "登录成功",
          token: jwt.generateToken({
            uid: result[0].uid
          }),
          uname: result[0].uname
        });
      } else {
        // 登录失败
        res.send({
          code: "600001",
          msg: "用户名或密码错误"
        });
      }
    }
  );
});
module.exports = router;
