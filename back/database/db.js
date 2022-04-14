const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'phoneshop'
});

module.exports = pool.promise();