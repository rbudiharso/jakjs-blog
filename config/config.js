var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'jakartajs'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/jakartajs-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'jakartajs'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/jakartajs-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'jakartajs'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/jakartajs-production'
  }
};

module.exports = config[env];
