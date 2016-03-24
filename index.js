var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var bcrypt = require
var app = express();



var mongoose = require('mongoose');
var User = require('./models/user');


app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/users', require('./controllers/user'));
app.use('/api/bags', require('./controllers/bag'));




app.listen(3000);
