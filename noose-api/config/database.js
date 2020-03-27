var mysql = require('mysql');

var pool_remote = mysql.createPool({
	connectionLimit: 96,
	host: 'remotemysql.com',
	port: '3306',
	user: '7TTHxQbY6m',
	password: 'NPjI233f6p',
	database: '7TTHxQbY6m',
	debug: 'false',
	dateStrings: true
});

var pool_local = mysql.createPool({
	connectionLimit: 96,
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '',
	database: 'noose',
	debug: 'false',
	dateStrings: true
});

exports.pool = pool_local;