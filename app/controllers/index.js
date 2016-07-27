'use strict';

const router = require('express').Router();

module.exports = app => {
	router.get('/', require('./home'));

	app.use(router);
};
