var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var updatedb = require('./routes/updatedb');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var index = require('./routes/index');
var updatedb = require('./routes/updatedb');

//app.set('views', './views');
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//var app = new express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());



app.get('/', function (req, res) {
   // res.send('Lets start');
    res.render('start');
});

app.use('/', index);
//app.use('/updatedb', updatedb);
app.use('/', updatedb);



//app.listen(3000, function () {
//       console.log('example app listening on port 3000!');
//}); 

app.server = http.createServer(app).listen(8000, function () {
    console.log("Server running...");
});


module.exports = app; 