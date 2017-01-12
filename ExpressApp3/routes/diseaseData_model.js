var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diseaseDateSchema = new Schema({
    title: String,
    symptoms: String,
    diagnostic: String
}, {
    collection: 'disease-data'
});

module.exports = mongoose.model('disease', diseaseDateSchema);