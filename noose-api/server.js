var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var routes = require('./routes').router;
var cors = require('cors');

var whitelist = ['https://noose-api.herokuapp.com', 'https://localhost:3000']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

var normalCors = function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
        callback(null, { origin: true })
    } else {
        callback(new Error('Not allowed by CORS'), {})
    }
}

var corsOptions = function (req, callback) {
    var referer = req.header('Referer')
    var origin = req.header('Origin')
    if (typeof origin === 'undefined' && typeof referer === 'undefined') {
        callback(null, { origin: true })
    }
    else if (typeof origin === 'undefined' && typeof referer !== 'undefined') {
        callback(null, { origin: true })
    }
    else {
        normalCors(origin, function (res) {
            callback(res)
        })
    }
}

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/', routes);

app.listen(port);

console.log('Listening on: ' + port);