var model = require('./model');

var TABLE_NAME = "reaccio";

exports.add = function (req, callback) {
    model.insertRow(`insert into ${TABLE_NAME} (temps, user_iduser) values (?, ?)`, [req.body.temps, req.body.user_iduser], function (result) {
        callback(result);
    });
}

exports.getRanking = function (callback) {
    model.getRows(`select * from ${TABLE_NAME} order by temps desc, creacio desc limit 10`, function (result) {
        callback(result);
    });
}