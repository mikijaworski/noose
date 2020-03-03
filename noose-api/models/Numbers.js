var model = require('./model');

var TABLE_NAME = "numbers";

exports.add = function (req, callback) {
    model.insertRow(`insert into ${TABLE_NAME} (level, user_iduser) values (?, ?)`, [req.body.level, req.body.user_iduser], function (result) {
        callback(result);
    });
}

exports.getRanking = function (callback) {
    model.getRows(`select * from ${TABLE_NAME} order by level desc, creacio desc limit 10`, function (result) {
        callback(result);
    });
}