module.exports = (function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var storySchema = Schema({
        _creator : { type: Number, ref: 'Person' },
        title    : String,
        fans     : [{ type: Number, ref: 'Person' }]
    });

    mongoose.model('Story', storySchema);
})();