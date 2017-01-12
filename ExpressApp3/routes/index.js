var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://localhost:27017/test');


var Disease = require('./diseaseData_model');
var Pacient = require('./pacient-data_model');
var Schema = mongoose.Schema;



// var diseaseDateSchema = new Schema({
//     title: String,
//     symptoms: String,
//     diagnostic: String
// }, {
//     collection: 'disease-data'
// });

// var userDateSchema = new Schema({
//     name: String,
//     gender: String,
//     age: Number,
//     description: String
// }, {
//     collection: 'user-data'
// });


// var DiseaseDate = mongoose.model('DiseaseDate', diseaseDateSchema);
// var UserDate = mongoose.model('UserDate', userDateSchema);



/* GET home page. */

//test route
router.get('/index', function (req, res) {
    res.render('index', {
        title: 'Express' });
   
    
});

router.get('/index', function (req, res, next) {
    Disease.find().then(function (doc) {
        res.render('index', {
            items: doc
        });
    });
});

router.post('/index', function (req, res) {
    var item = {
        name: req.body.user.name,
        gender: req.body.gender,
        age: req.body.user.age,
        description: req.body.user.description,
        email: req.body.email
    };

    var data = new Pacient(item);
    data.save();

    var pacientDescription = req.body.user.description;
    var resultReqExp = pacientDescription.replace(/, /, "| ");
    var regExp = new RegExp(resultReqExp, 'gi');
    var lArray = [];
    var percentArray = [];

    function getPercentMatch() {
            var maxElem = Math.max.apply(null, lArray);
            lArray.forEach(function(item, lArray) {
                var resultPercent = (item * 90)/maxElem;
                percentArray.push(resultPercent + "%");
                //console.log(percentArray);
            }
            )};

    //Reg search and display data on index    
    Disease.find({
        symptoms: regExp
    }).then(function (doc, reslt) {
        doc.forEach(function (item) {
            var str = new String(item);
            resultMatch = str.match(regExp);

            lArray.push(resultMatch.length);
            //return lArray;
            //console.log(lArray);
            
        });
        getPercentMatch();  

        res.render('index', { items: doc, 
                              items2: percentArray});
        
        // console.log(percentArray);      
            
    });

    var query2 = Disease.find({
        symptoms: regExp
    }, 'symptoms', function (err, docs) {
        //res.render('index', { items: docs });
        query2.exec(function (err, symptom) {
            if (err) return handleError(err);

            //Перебор массива симптомов на количество совпадений

        });
    });
});

module.exports = router;
