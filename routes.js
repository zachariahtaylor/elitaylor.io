/**
 * Created by Zachariah on 3/22/2016.
 *
 *  Routes 
 */

var express = require('express'),
	router = express.Router(),
	path = require('path'),
    Q = require('q'),
    fs = require('fs'),
    exec = require('child-process-promise').exec;


//Schemas
//var Location = require('./schema.js');



//Static Files
router.use(express.static(__dirname + '/styles'));
router.use(express.static(__dirname + '/images'));
router.use(express.static(__dirname + '/images/logo'));
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

router.get('/z', function(req, res) {
    res.render('test', {title: 'hey', message: 'header'});
});


module.exports = router;