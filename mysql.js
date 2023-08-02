const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('有成功連結到MySQL');
});

module.exports = db;