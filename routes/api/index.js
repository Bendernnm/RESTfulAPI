var express = require('express');
var route = express.Router();

var bears = require('./bears');

route.route('/')
    .all(function (req, res, next) {
        console.log('/api');
        next();
    })
    .get(function (req, res, next) {
        res.json({message: 'hooray! welcome to our api!'});
    });

route.use('/bears', bears);

module.exports = route;