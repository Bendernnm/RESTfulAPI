var express = require('express');
var route = express.Router();

var handler = require('../../handlers/bear');

//TODO test
route.use(function (req, res, next) {
    console.log('/bears');
    next();
});

route.route('/')
    .get(handler.readBears)
    .post(handler.createBear);

route.route('/:id')
    .get(handler.readBear)
    .put(handler.updateBear)
    .delete(handler.deleteBear);

module.exports = route;