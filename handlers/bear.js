var Bear = require('../models/bear');

module.exports = {
    createBear: function (req, res, next) {
        var bear = new Bear();
        bear.name = req.body.name;

        bear.save(function (err, item) {
            if (err) return next(err);

            res.send('Bear ' + item.name + ' created!');
        });
    },
    readBears: function (req, res, next) {
        Bear.find({})
            .exec(function (err, items) {
                if (err) return next(err);

                res.json(items);
            });
    },
    readBear: function (req, res, next) {
        var id = req.params.id;
        Bear.findById(id)
            .exec(function (err, item) {
                if (err) return next(err);

                res.json(item);
            });
    },
    updateBear: function (req, res, next) {
        var id = req.params.id;
        var name = req.body.name;

        Bear.findById(id)
            .exec(function (err, item) {
                if (err) return next(err);
                item.name = name;

                item.save(function (err, item) {
                    if (err) return next(err);

                    res.json('Bear ' + item.name + ' update!');
                });
            });
    },
    deleteBear: function (req, res, next) {
        var id = req.params.id;

        Bear.remove({_id: id})
            .exec(function (err, item) {
                if (err) return next(err);

                res.send('Bear delete!');
            });
    }
};