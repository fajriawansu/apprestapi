var mysql = require('mysql');

/// create database connection

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect((e) => {
    if(e) throw e;
    console.log('mysql connected');
})

module.exports = conn;