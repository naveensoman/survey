var express = require('express');
var app = express();
var User = require("../../models/user");
var bodyParser = require('body-parser');
function validateInput(body) {
    return body && body.name && true;
}



var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

app.use(require('express-session')({
    secret: "Shopalyst is awesome",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser);

app.use(passport.initialize());
app.use(passport.session());

app.use(require('express-session')({
    secret: "Shopalyst is awesome",
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function post(req, res) {
    var body = req.body;
    if (!validateInput(body)) {
        res.status(400);
        res.json({
            success: false,
            message: "Bad Request. Please check body"

        })
        return;
    }
    User.register(new User({
        username: body.username
    }), body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.redirect("./index.html");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/survey");
        });
    });
}

module.exports = post;