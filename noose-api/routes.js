var express = require('express');
var router = express.Router();

var userController = require('./controllers/user');
var numbersController = require('./controllers/numbers');
var reaccioController = require('./controllers/reaccio');

// USERS
router.route('/login').post(userController.login);
router.route('/register').post(userController.register);

// NUMBERS
router.route('/numbers/add').post(numbersController.add);
router.route('/numbers/ranking').get(numbersController.getRanking);

// REACCIO
router.route('/reaccio/add').post(reaccioController.add);
router.route('/reaccio/ranking').get(reaccioController.getRanking);

router.route('/*')
    .get(function (req, res) {
        res.json({ "code": 404, "message": "Path not found" });
        //res.sendFile(path.join(webAppDir, 'public/index.html'));
    });

exports.router = router;