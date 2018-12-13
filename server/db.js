// 数据库配置
const mysql = require('mysql')

module.exports = (sql, callback) => {
	const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yushangyuan',
    database : 'test'
  })

  db.connect()
  db.query(sql, callback)
  db.end()
}
