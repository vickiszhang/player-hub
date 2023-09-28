``const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('./.env');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const app = express();

const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASS,
	database: process.env.DBNAME,
})

app.get('/query-test', (req, res) => {
	let query =
		`INSERT INTO \`games\` VALUES (1)`;

	console.log(query);

	db.query(query, (err, results, fields) => {
		if (err) {
			return res.send(err)
		}

		console.log(fields)
		return res.json(results);
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
