const mysql = require('mysql2');
require('dotenv').config();

let sql = mysql.createPool({
    host: process.env.Host,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    multipleStatements: true
});

module.exports = sql;