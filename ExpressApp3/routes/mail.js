var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
    var id = req.params.id;    
    console.log(id);
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'eugeneberegovoj@gmail.com',
            pass: 'beregpriest1'
        }
    
    });

    var mailOptions = {
        from: 'eugeneberegovoj@gmail.com',
        // to: 'nourdalbonzo@gmail.com',
        to: id,
        subject: 'test',
        // text: 'textTest',
        html: '<h1>Hello from Khpi AP</h1>'
    }

    transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
        res.json({yo: 'error'});
    } else {
        console.log('Message sent: ' + info.response);
        // res.json({yo: info.response});
        res.render('sucsess');
    };


    });
});
module.exports = router;