var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var Pacient = require('./pacient-data_model');


router.get('/', function(req, res, next) {
   Pacient.find().then(function(doc) {
       res.render('pacient', {items: doc});
   });
});

module.exports = router;