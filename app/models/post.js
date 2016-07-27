'use strict';

module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
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

