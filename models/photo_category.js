"use strict";
module.exports = function(sequelize, DataTypes) {
  var PhotoCategory = sequelize.define(
    "PhotoCategory",
    {
      category: {
        type: DataTypes.STRING
      }
    },
    {}
  );

  PhotoCategory.associate = function(models) {
    this.belongsToMany(models.User, {
      through: "UserCategory"
    });
  };
  return PhotoCategory;
};
