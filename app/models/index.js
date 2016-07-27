"use strict";

const fs        = require("fs");
const path      = require("path");
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const Sequelize = require("sequelize");
const lodash    = require("lodash");
const config    = require("../../config/database.json")[env];
const db        = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(file => {
	return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
	const model = sequelize.import(path.join(__dirname, file));
	db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

module.exports = lodash.extend({
	sequelize: sequelize,
	Sequelize: Sequelize
}, db);
