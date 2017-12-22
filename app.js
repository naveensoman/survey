require('marko/node-require').install();
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var markoExpress = require('marko/express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require("./models/user");
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.use(require('express-session')({
    secret: "Shopalyst is awesome",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(require('./routes'));
app.use(express.static(__dirname + "/public"));
app.use(markoExpress()); //enable res.marko(template, data)
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var listener = app.listen(8888, function() {
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

//ROUTES


