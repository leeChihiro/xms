// 数据库连接池
const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "xms",
  connectionLimit: 15
});
module.exports=pool;