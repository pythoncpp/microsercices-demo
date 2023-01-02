const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'user_service_db',
  user: 'root',
  password: 'root',
})

module.exports = {
  pool,
}
