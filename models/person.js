module.exports = (function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var personSchema = Schema({
        _id     : Number,
        name    : String,
        age     : Number,
        stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
    });

    mongoose.model('Person', personSchema);
})();