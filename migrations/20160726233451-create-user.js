'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
			username: { type: Sequelize.STRING },
			createdAt: { type: Sequelize.DATE },
			updatedAt: { type: Sequelize.DATE }
		});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
  }
};
