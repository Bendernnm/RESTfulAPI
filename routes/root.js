var express = require('express');
var route = express.Router();

route.get('/', function (req, res, next) {
    res.json({message: 'hooray! welcome to our server!'});
});

module.exports = route;