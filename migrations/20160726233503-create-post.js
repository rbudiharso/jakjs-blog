'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Posts', {
			title: { type: Sequelize.STRING },
			content: { type: Sequelize.TEXT }
		});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Posts');
  }
};
