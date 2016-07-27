'use strict';

const router = require('express').Router();

module.exports = app => {
	router.get('/', require('./home'));
	router.get('/users/:username', require('./users/posts'));

	app.use(router);
};
