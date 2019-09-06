const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

/**
 * @description 使用 token 加密
 * @param {Object,String} data - 要加密的数据
 * @return {Object} token - 加密后的数据
 */
function generateToken(data) {
  /**
   * @description 获取过期时间
   * @type {Number}
   */
  let created = ~~(Date.now() / 1000);

  /**
   * @description 硬盘读取私钥
   * @type {Buffer}
   */
  let cert = fs.readFileSync(
    path.resolve(__dirname, "./pem/rsa_private_key.pem")
  );

  /**
   * @description 生成加密字符串
   * @type {String}
   */
  let token = jwt.sign(
    {
      data, // 要加密的数据
      exp: created + 60 * 60 // 过期时间
    },
    cert,
    { algorithm: "RS256" }
  );
  return token;
}
/**
 * @description 解密 token 加密后字符串
 * @param {object} token - 已经使用 token 加密好的数据
 * @return {object} data - 解密后的数据
 */
function verifyToken(token) {
  let cert = fs.readFileSync(
    path.resolve(__dirname, "./pem/rsa_public_key.pem")
  );
  let data;
  try {
    // token不是空
    if (token) {
      let result = jwt.verify(token, cert, { algorithms: ["RS256"] }) || {};
      data = result.data || {};
    }
  } catch (e) {
    data = e;
  }
  return data;
}
module.exports = { generateToken, verifyToken };
