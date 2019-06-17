"use strict";
module.exports = function(sequelize, DataTypes) {
  var PhotoCatagory = sequelize.define(
    "PhotoCatagory",
    {
      catagory: DataTypes.STRING,
    },
    {}
  );

  PhotoCatagory.associate = function(models) {
    this.belongsToMany(models.User, {
      through: "UserCatagory"
    });
  };
  return PhotoCatagory;
};
