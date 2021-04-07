const express = require('express')
const dbModule = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3001
// const pool = dbModule.createPool({
// 	connectionLimit: 10,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'password',
// 	database: 'database-name'
// })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/api/v1/table-name', (request, response) => {
// 	pool.getConnection((error, connection) => {
// 		if (error) throw error
// 		connection.query('SELECT * FROM table-name;', (error, rows) => {
// 			connection.release()
// 			if (!error) {
// 				response.send(rows)
// 			} else {
// 				console.log(error)
// 			}
// 		})
// 	})
// })

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
