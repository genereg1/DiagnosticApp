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

    var data = new UserDate(item);
    data.save();

    var pacientDescription = req.body.user.description;
    var regExp = new RegExp(item.description, 'gi');
    

    // var query = DiseaseDate.find({ symptoms: regExp}).select('symptoms');
    // query.exec(function (err, symptom) {
    //     if (err) return handleError(err);
    //     //console.log(symptom); 
    //     var str = new String(symptom);
    //     resultMatch = str.match(regExp);
    //     console.log(resultMatch);
    // });
    
    //Reg search and display data on index    
    DiseaseDate.find({ symptoms: regExp }).then(function (doc) {
         res.render('index', { items: doc });
    });

    var query2 = DiseaseDate.find({ symptoms: regExp }, 'symptoms', function(err, docs) {
        //res.render('index', { items: docs });
        query2.exec(function (err, symptom) {
            if (err) return handleError(err);
            
        //Перебор массива симптомов на количество совпадений
        docs.forEach(function(item) {
            var str = new String(item);
            resultMatch = str.match(regExp);
            console.log(resultMatch);
        });
        });
    });
});

module.exports = router;