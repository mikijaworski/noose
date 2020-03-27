var model = require('./model');

var TABLE_NAME = "numbers";

exports.add = function (req, callback) {
    model.insertRow(`insert into ${TABLE_NAME} (level, user_iduser) values (?, ?)`, [req.body.level, req.body.user_iduser], function (result) {
        callback(result);
    });
}

exports.getRanking = function (callback) {
    model.getRows(`select * from ${TABLE_NAME} order by level desc, creacio desc limit 10`, function (result) {
        getUser(result, function (result2) {
            callback(result2);
        });
    });
}

function getUser(list, callback) {
    console.log(list)
    if (list.rows.length > 0) {
        let itemsProcessed = 0;
        list.rows.forEach(l => {
            model.getRow("SELECT iduser, email, name FROM `user` WHERE iduser = " + l.user_iduser, function (user) {
                l.user_iduser = user.row;
                itemsProcessed++;
                if (itemsProcessed === list.rows.length) {
                    callback(list);
                }
            });
        });
    } else {
        callback(list);
    }
}