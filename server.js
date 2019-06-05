var express = require('express');
var app = express(),
    port = process.env.port || 3000,
    mongoose = require('mongoose'),
    task = require('./api/models/todoListModel'),
    bodyParse = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);
//mongod --port 27017 --dbpath=D:\work\data\db

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
console.log('todo list RESTful API server started on: ' + port);

