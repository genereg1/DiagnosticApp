var express = require('express');
var router = express.Router();


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

    console.log(req.body.user.name);
    console.log(req.body.user.age);
    console.log(req.body.user.description);
    
    
    
    
    
});

module.exports = router;