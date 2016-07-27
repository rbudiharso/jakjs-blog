'use strict';

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const exphbs  = require('express-handlebars');

module.exports = function(app, config) {
	const env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';

	app.engine('handlebars', exphbs({
		layoutsDir: config.root + '/app/views/layouts/',
		defaultLayout: 'main',
		partialsDir: [config.root + '/app/views/partials/']
	}));
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'handlebars');

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cookieParser());
	app.use(compress());
	app.use(express.static(config.root + '/public'));
	app.use(methodOverride());

	require('../app/controllers')(app);

	app.use(function (req, res, next) {
		const err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: app.get('env') === 'development' ? {} : err,
			title: 'error'
		});
	});

};
