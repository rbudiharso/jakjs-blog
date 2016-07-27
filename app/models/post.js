'use strict';

module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    excerpt: DataTypes.STRING(500),
    content: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function (models) {
				Post.belongsTo(models.User);
      }
    }
  });

  return Post;
};

