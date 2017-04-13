var express = require('express');
var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var app = express();
const Zomato = require('zomato.js');

const z = new Zomato('ecb092da3471c0396d4c9c0b2c1db590');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());



// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//require("./assignment/app.js")(app);
require("./project/app.js")(app, z);

var port = process.env.PORT || 22000;

app.listen(port);