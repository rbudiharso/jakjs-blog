const express = require('express');
const router = express.Router();
const db = require('../../models');

module.exports = (req, res, next) => {
	db.sequelize.transaction(t => {
		return db.Post.findAll({
			include: [db.User],
			order: [['createdAt', 'DESC']],
			transaction: t
		})
		.then(posts => {
			res.render('home/index', { posts });
		});
	})
};
