'use strict';

const db = require('../../models')

module.exports = (req, res, next) => {
	db.sequelize.transaction(t => {
		return db.User.findOne({
			where: { username: req.params.username },
			include: [
				{ model: db.Post, order: [['createdAt', 'DESC']] }
			],
			transaction: t
		})
		.then(user => {
			res.render('users/posts', { user, posts: user.Posts });
		});
	});
};
