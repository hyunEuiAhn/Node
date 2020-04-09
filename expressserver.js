// var express = require('express');
// var app = express();
// var server = app.listen(3000, function(){
//     console.log("Express server has started on port 3000");
// })

// app.get('/', function(req,res){
//     res.send('Hello World!');
// })



/*
var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});

app.use(express.static('public'));
*/






var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));


var router = require('./router/main') (app, fs);



var session = require('express-session');

app.use(session({
    secret : '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}))