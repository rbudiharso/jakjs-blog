const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (req, res, next) => {
	res.render('home/index');
};
