var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDateSchema = new Schema({
    name: String,
    gender: String,
    age: Number,
    description: String
}, {
    collection: 'user-data'
});

module.exports = mongoose.model('pacient', userDateSchema);