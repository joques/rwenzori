# Module dependencies
express = require 'express'

# server creation
app = express()
http = require 'http'
rwenzServer = http.createServer app

# app configuration
# general configuration
app.configure =>
	app.set 'views', __dirname + '/../../app'
	app.engine 'html', require('ejs').renderFile
	app.use express.compress()
	app.use express.bodyParser()
	app.use express.methodOverride()
	app.use express.static(__dirname + '/../../app')
	app.use app.router

# development configuration
app.configure 'development', =>
	app.use express.errorHandler(
		dumpExceptions: true
		showStack: true
	)


# production configuration
app.configure 'production', =>
	app.use express.errorHandler(
		dumpExceptions: true
		showStack: true
	)

# route inclusion
require('./routes/view-routes')(app)
# require('./routes/api-routes')(app)

# start server
rwenzServer.listen 9949, () =>
	console.log "Rwenzori server now running -- Server listening on port %d in mode %s", rwenzServer.address().port, app.settings.env