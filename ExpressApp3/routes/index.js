var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
    
}); 

router.post('/', function (req, res) {    
    res.send("Post Page");
    console.log(req.body.user.name);
    console.log(req.body.user.age);
    console.log(req.body.user.description);
    
    
    
});

module.exports = router;