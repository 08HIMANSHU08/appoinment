
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Himanshu@1998'
});

module.exports = pool.promise();