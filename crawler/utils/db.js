const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

let connection = mysql.createConnection({
    host: process.env.DB_HOST, // 127.0.0.1
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });

  module.exports = connection;



//老師的做法：

// const mysql = require("mysql2");
// require("dotenv").config();

// let connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// module.exports = connection;