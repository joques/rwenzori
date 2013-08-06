# View routes

module.exports = (app) =>
	# main View
	app.get '/', (request, response) =>
		response.render 'index.html'