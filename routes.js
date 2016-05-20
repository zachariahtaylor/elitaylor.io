/**
 * Created by Zachariah on 3/22/2016.
 *
 *  Routes 
 */

var express = require('express'),
	router = express.Router(),
	path = require('path'),
    Q = require('q'),
    exec = require('child-process-promise').exec;


//Schemas
//var Location = require('./schema.js');


//Static Files
router.use(express.static(__dirname + '/styles'));

//Pages
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


module.exports = router;