var model = require('../models/Reaccio');

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