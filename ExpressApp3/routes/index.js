var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var diseaseDateSchema = new Schema({
    title: String,
    symptoms: String,
    diagnostic: String
}, {collection: 'disease-data'});

var userDateSchema = new Schema({
    name: String,
    gender: String,
    age: Number,
    description: String
}, {collection: 'user-data'});


var DiseaseDate = mongoose.model('DiseaseDate', diseaseDateSchema); 
var UserDate = mongoose.model('UserDate', userDateSchema);

/* GET home page. */

//test route
router.get('/index', function (req, res) {
    res.render('index', { title: 'Express' });
    
}); 

router.get('/get', function(req, res, next) {
   DiseaseDate.find().then(function(doc) {
       res.render('index', {items: doc});
   });   
});


router.post('/get', function (req, res) { 
    var item = {
        name: req.body.user.name,
        gender: req.body.gender,
        age: req.body.user.age,
        description: req.body.user.description
    };

    var pacientDescription = req.body.user.description;
    var regExp = new RegExp(item.description, 'i');
    
    
    var data = new UserDate(item);
    data.save();

    DiseaseDate.find({symptoms: regExp}).then(function(doc) {
        
        res.render('index', { items: doc });
        
    });
});

module.exports = router;