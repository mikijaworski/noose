var model = require('./model');

var TABLE_NAME = "user";

exports.login = function (req, callback) {
    model.getRow(`select * from ${TABLE_NAME} where email = "${req.body.email}" and password = "${req.body.password}"`, function (result) {
        callback(result);
    });
}

exports.register = function (req, callback) {
    model.insertRow(`insert into ${TABLE_NAME} (email, password, name) values (?, ?, ?)`, [req.body.email, req.body.password, req.body.name], function (result) {
        callback(result);
    });
}