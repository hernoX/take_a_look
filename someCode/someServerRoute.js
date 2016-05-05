'use strict';

module.exports = function(app) {
	var someServer = require('../../app/controllers/someServer.controller');

	app.route('/api/someEndpoint')
		.post(someServer.create)
		.get(someServer.read)
		.put(someServer.update);
};
