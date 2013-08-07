/**
*
* Module dependencies
*
**/

var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

// app configuration
app.configure(function(){
	app.set('views', __dirname + '/../app');
	app.engine('html', require('ejs').renderFile);
	app.use(express.compress());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/../app'));
	app.use(app.router);
});

app.configure('development', function(){
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

var extraParam = process.argv[2];

// route inclusion
require('../app/server/routes/view-routes')(app);
require('../app/server/routes/api-routes')(app, extraParam);

// start server
server.listen(9949, function(){
	console.log("Rwenzori server listening on port %d in %s mode", server.address().port, app.settings.env);
});