var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 96,
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '',
	database: 'noose',
	debug: 'false',
	dateStrings: true
});

exports.pool = pool;