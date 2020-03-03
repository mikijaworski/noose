var model = require('../models/User');

exports.login = function (req, res) {
    model.login(req, function (result) {
        res.json(result);
    })
}

exports.register = function (req, res) {
    model.register(req, function (result) {
        res.json(result);
    })
}