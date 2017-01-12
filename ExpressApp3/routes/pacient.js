var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var Pacient = require('./pacient-data_model');
var EmailSend = require('./mail.js')

router.get('/', function(req, res) {
    res.render('pacient');
});

router.get('/get-pacient', function(req, res, next) {
   Pacient.find().then(function(doc) {
       res.render('pacient', {items: doc});
   });
});

// router.post('/get-pacient', function(req, res, next) {
//     var id = req.param.id;
//     console.log(req.body.id);       
//     Pacient.findByIdAndRemove(id).exec();
//         res.redirect('/get-pacient');
// });

router.get('/delete-pacient/:id', function(req, res, next) {
    // console.log(req.params.id);
    // res.render('pacient');

    var id = req.params.id;
     
    Pacient.findByIdAndRemove(id).exec();
        res.redirect('/get-pacient');
});

router.get('/update-pacient/:id', function(req, res, next) {
    var id = req.params.id;
    res.redirect('/get-data');

  Pacient.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.name = req.body.name;
    doc.age = req.body.name;
    doc.description = req.body.name;
    doc.save();
  })
  
});


// router.post('/delete-pacient/:id', function(req, res, next) {
//     var id = req.body.id;
//     console.log(id);       
//     Pacient.findByIdAndRemove(id).exec();
//         res.redirect('/get-pacient');
    
//      Pacient.findById(req.params.id)
//             .exec(function(err, entries) {
//                // changed `if (err || !doc)` to `if (err || !entries)`
//                 if (err || !entries) {
//                     res.statusCode = 404;
//                     res.send({});
//                 } else {
//                     entries.remove(function(err) {
//                         if (err) {
//                             res.statusCode = 403;
//                             res.send(err);
//                         } else {
//                             res.send({});
//                         }
//                     });
//                 }
//             });
// });

module.exports = router;