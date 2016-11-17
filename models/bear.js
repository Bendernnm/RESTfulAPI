module.exports = (function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var BearSchema = new Schema({
        name: String
    });

    var model = mongoose.model('Bear', BearSchema);
})();