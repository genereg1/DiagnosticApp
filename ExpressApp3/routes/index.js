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



var DiseaseDate = mongoose.model('DiseaseDate', diseaseDateSchema); 

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

//test route
router.get('/find', function(req, res, next) {
    DiseaseDate.find({symptoms: "testS"}).then(function(doc) {
        res.render('index', {items: doc});
    });
});

router.post('/get', function (req, res) {    
    var pacientName = req.body.user.name;
    var pacientGender = req.body.gender;
    var pacientAge = req.body.user.age;
    var pacientDescription = req.body.user.description; 
    var regExp = new RegExp(pacientDescription, 'i');
    
    
    //res.send("Post Page");
    //res.render('post', { pacientName, pacientAge, pacientDescription, pacientGender });
    DiseaseDate.find({symptoms: regExp}).then(function(doc) {
        
        res.render('index', { items: doc });
        
    });
});

module.exports = router;