var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
// connect db
mongoose.connect(config.database);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected Mongodb');
    // we're connected!
});


// init  app
var app = express();
// views engine setups
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

// et public folder
app.use(express.static(path.join(__dirname, 'public')));
//  index layouts
app.get('/', function(req, res) {
    res.render('index');
});

//star server 
var port = 3001;
app.listen(port, function() {
    console.log('server open ' + port);
});