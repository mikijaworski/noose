var model = require('../models/Numbers');

exports.add = function (req, res) {
    model.add(req, function (result) {
        res.json(result);
    })
}

exports.getRanking = function (req, res) {
    model.getRanking(function (result) {
        res.json(result);
    });
}