'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Sessioninfo Schema
 */
var someSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	fromLang: {
		type: String,
		required: 'this is required'
	},
	toLang: {
		type: String,
		required: 'this is required'
	},
	fromCountry: {
		type: String,
		default: 'US'
	},
	serviceLevel: {
		type: {
			standard: {
				type: Boolean,
				default: true
			},
			expert: {
				type: Boolean,
				default: false
			}
		}
	},
}, { versionKey: false });

mongoose.model('someSchema', someSchema);
