var http = require('http');
var express = require('express');
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');


app.set('views', './views');
app.set('view engine', 'jade');

//var app = new express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());



app.get('/', function (req, res) {
    res.send('Lets start');
});

app.use('/index', index);



//app.listen(3000, function () {
//       console.log('example app listening on port 3000!');
//}); 

app.server = http.createServer(app).listen(3000, function () {
    console.log("Server running...");
});


//module.exports = app;