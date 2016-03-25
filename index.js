var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var app = express();
var mongodb = require('mongodb');

var secret = "mysupersecretpassword";


var mongoose = require('mongoose');
var User = require('./models/user');
var Bag = require('./models/bag');

var uri = proccess.env.MONGO;
mongoose.connect(uri);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', require('./controllers/users'));
app.use('/api/bags', require('./controllers/bags'));

app.use('/api/bags', expressJWT({secret: secret})
  .unless({path: ['/api/bags'], method: 'post'}));

app.use('/api/users', expressJWT({secret: secret})
.unless({path: ['/api/users'], method: 'post'}));

app.post('/api/auth', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err || !user) return res.status(401).send({message: 'User not found'});
    user.authenticated(req.body.password, function(err, result) {
      if (err || !result) return res.status(401).send({message: 'User not authenticated'});

      var token = jwt.sign(user, secret);
      res.send({user: user, token: token});
    });
  });
});



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT||3000);
