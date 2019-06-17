"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      zip: DataTypes.INTEGER
    },
    {}
  );

  User.associate = function(models) {
    this.belongsToMany(models.Event, {
      through: "EventUser"
    });
  };

  User.associate = function(models) {
    this.belongsToMany(models.PhotoCatagory, {
      through: "UserCatagory"
    });
  };
  return User;
};