var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var routes = require('./routes').router;
var cors = require('cors');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

app.use('/', routes);

app.listen(port);

console.log('Listening on: ' + port);