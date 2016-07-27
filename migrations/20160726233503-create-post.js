'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Posts', {
			id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
			UserId: { type: Sequelize.INTEGER },
			title: { type: Sequelize.STRING },
			excerpt: { type: Sequelize.STRING(500) },
			content: { type: Sequelize.TEXT },
			createdAt: { type: Sequelize.DATE },
			updatedAt: { type: Sequelize.DATE }
		});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Posts');
  }
};
