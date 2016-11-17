var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');
var config = require('./config');

mongoose.connect(config.mongodb);

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes.root);
app.use('/api', routes.api);

//TODO error handler
// app.use(function (err, req, res, next) {
//     console.log('ERROR');
//     res.send('Error');
// });

app.listen(config.port, function () {
    console.log('start server in ' + config.port);
});