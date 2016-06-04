/**
 * Created by Zachariah on 3/22/2016.
 */

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    logger = require('morgan'),
    http = require('http'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    app = express();


//app.use(logger('Developer')); //Developer logger
var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
app.use(logger('combined', {stream: accessLogStream}));

app.set('view engine', 'ejs');

app.use(bodyParser.json()); //Parse response body into JSON
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', routes);

app.listen(80, function (req,res) {
    console.log('Server listening on port 80.');
});

/*mongoose.connect('mongodb://localhost/Locations', function(err) {

    if (err)
        return handleError(err);
    else
        var db = mongoose.connection;

    console.log("Connnected to database: Locations");
});*/



