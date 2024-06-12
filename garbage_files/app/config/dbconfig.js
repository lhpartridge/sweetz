const mysql = require('mysql2')

const pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sweetz_db'
})

module.exports = pool