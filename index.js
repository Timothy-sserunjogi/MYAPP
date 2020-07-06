//requires the express dependency to include express functionality
const express = require('express');
//creates an express server
const server = express();
const mongoose = require("mongoose");
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes')
const passport = require('passport')
const User = require('./models/userModel.js')

//you always set pug you dont require it
server.set('view engine', 'pug');
server.get('/home',(req, res)=>{
    res.render('index.pug')
    });

    server.use(express.static('public'))

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/register', registerRoutes)
server.use('/login', loginRoutes)
server.use(passport.initialize());

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect("mongodb://localhost:27017/node-demo",{ useNewUrlParser: true, useUnifiedTopology: true },function(err){
 
   if (err) throw err;
 
   console.log('Successfully connected');

});

//have the server listen to requests from browsers
server.listen(2000, function() {
    console.log('listening on 2000')
})