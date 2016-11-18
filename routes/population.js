var express = require('express');
var route = express.Router();

var Person = require('mongoose').model('Person');
var Story = require('mongoose').model('Story');

route.route('/')
    .get(function (req, res, next) {
        Story
            .findOne({title: 'Once upon a timex.'})
            .populate('_creator', 'name')
            .exec(function (err, story) {
                console.log(story);
                if (err) return handleError(err);
                console.log('The creator is %s', story._creator.name);
                res.json({message: ('The creator is %s', story._creator.name)});
            });
    })
    .post(function (req, res, next) {
        var aaron = new Person({_id: 0, name: 'Aaron', age: 100});

        aaron.save(function (err, item) {
            if (err) return handleError(err);
            // console.log(item);

            var story1 = new Story({
                title: "Once upon a timex.",
                _creator: aaron._id
            });

            story1.save(function (err, item) {
                if (err) return handleError(err);
                // console.log(item);
            });
            
            res.json(item);
        });
    });

module.exports = route;