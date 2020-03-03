var db = require('../config/database');

exports.getRows = function (query, callback) {
    db.pool.getConnection(function (err, connection) {
        if (err) {
            try {
                connection.release();
            }
            catch (error) {
                console.error(error);
            }

            callback({ "code": 100, "status": "Error in connection database" });
        }
        connection.query(query, function (err, rows) {
            connection.release();
            if (!err) {
                callback({ "code": 1, "rows": rows });
            }
        });
        connection.on('error', function (err) {
            callback({ "code": 100, "status": "Error in connection database" });
        });
    });
}

exports.getRow = function (query, callback) {
    db.pool.getConnection(function (err, connection) {
        if (err) {
            try {
                connection.release();
            }
            catch (error) {
                console.error(error);
            }

            callback({ "code": 100, "status": "Error in connection database" });
        }
        connection.query(query, function (err, row) {
            connection.release();
            if (!err) {
                if (row.length === 0) {
                    callback({ "code": 2, "row": row[0] });
                } else {
                    callback({ "code": 1, "row": row[0] });
                }
            }
        });
        connection.on('error', function (err) {
            callback({ "code": 100, "status": "Error in connection database" });
        });
    });
}

exports.insertRow = function (query, values, callback) {
    db.pool.getConnection(function (err, connection) {
        if (err) {
            try {
                connection.release();
            }
            catch (error) {
                console.error(error);
            }

            callback({ "code": 100, "status": "Error in connection database" });
        }
        connection.query(query, values, function (err, rows) {
            connection.release();
            if (!err) {
                callback({ "code": 1, "insertId": rows.insertId });
            }
        });
        connection.on('error', function (err) {
            callback({ "code": 100, "status": "Error in connection database" });
        });
    });
}