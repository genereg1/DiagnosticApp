var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var diseaseDateSchema = new Schema({
    title: String,
    symptpoms: String,
    diagnostic: String
}, {collection: 'diseace-data'});

var DiseaseDate = mongoose.model('DiseaseDate', diseaseDateSchema); 



/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
    
}); 



router.post('/', function (req, res) {    
    var pacientName = req.body.user.name;
    var pacientGender = req.body.gender;
    var pacientAge = req.body.user.age;
    var pacientDescription = req.body.user.description; 
    
    //res.send("Post Page");
    res.render('post', { pacientName, pacientAge, pacientDescription, pacientGender });
    
    //DiseaseDate.find({ description: { $elemMatch: { symptoms: pacientDescription } } }, function (doc) {
        //res.render('post', { items: doc });
    //});


    //console.log(DiseaseDate.find({ description: { $elemMatch: { symptoms: pacientDescription } } });


    
});

router.get('/', function(req, res, next) {
   DataDisease.find().then(function(doc) {
       res.render('updatedb', {items: doc});
   });
});

module.exports = router;