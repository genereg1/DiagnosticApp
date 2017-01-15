var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var Disease = require('./diseaseData_model');

// var url = 'mongodb://localhost:27017/test';

router.get('/', function(req, res) {
    res.render('updateDisease');
});

router.get('/get-data-disease', function(req, res, next) {   
       res.render('updateDisease');
});

router.post('/insert-disease', function(req, res, next) {
    var item = {
        title: req.body.title,
        symptoms: req.body.symptoms,
        diagnostic: req.body.diagnostic
    };

    var data = new Disease(item);
    data.save();
    
    res.redirect('/get-data-disease');
});

router.post('/update', function(req, res, next) {
var id = req.body.id;

  Pacient.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.name = req.body.name;
    doc.symptoms = req.body.name;
    doc.description = req.body.name;
    doc.save();
  })
  res.redirect('get-data');
});

router.post('/delete', function(req, res, next) {

    var id = req.body.id;
    Disease.findByIdAndRemove(id).exec();
    res.redirect('/get-data');
    
    
});
module.exports = router;

