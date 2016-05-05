'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    errorHandler = require('./errors.server.controller'),
    SomeSessionInfo = mongoose.model('SomeSessionInfo'),


/**
 * Create a SomeSessionInfo
 */
exports.create = function(req, res) {
	var someSession = new SomeSessionInfo(req.body);
	someSessionInfo.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(someSessionInfo);
		}
	});
};

/**
 * Show the current SomeSessionInfo
 */
exports.read = function(req, res) {
	var ids = [];
	for (var key in req.query){
		ids.push(req.query[key]);
	}
	var query = SomeSessionInfo.find({_id: { $in: ids }});
	query
	.populate('someField')
	.populate('someOtherField')
	.exec( function(err, docs){
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(docs);
		}
	});
};
