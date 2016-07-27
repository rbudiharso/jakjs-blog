'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			username: { type: Sequelize.STRING }
		});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
  }
};
