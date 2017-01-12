var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var Pacient = require('./pacient-data_model');

// var url = 'mongodb://localhost:27017/test';

router.get('/', function(req, res) {
    res.render('updatedb');
});

router.get('/get-data', function(req, res, next) {
   Pacient.find().then(function(doc) {
       res.render('updatedb', {items: doc});
   });
});

router.post('/insert', function(req, res, next) {
    var item = {
        name: req.body.name,
        age: req.body.age,
        description: req.body.description
    };

    var data = new Pacient(item);
    data.save();
    
    res.redirect('/get-data');
});

router.post('/update', function(req, res, next) {
var id = req.body.id;

  Pacient.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.name = req.body.name;
    doc.age = req.body.name;
    doc.description = req.body.name;
    doc.save();
  })
  res.redirect('get-data');
});

router.post('/delete', function(req, res, next) {

    var id = req.body.id;
    Pacient.findByIdAndRemove(id).exec();
    res.redirect('/get-data');
    
    
});
module.exports = router;

