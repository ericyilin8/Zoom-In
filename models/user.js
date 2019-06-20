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

  var modelTest = sequelize.define(
    "test",
    {name: DataTypes.STRING},
    {}


  );


  User.associate = function(models) {
    this.belongsToMany(models.Event, {
      through: "EventUser"
    });
    this.belongsToMany(models.Photocategory, {
      through: "UserCategory"
    });
  };

  /*User.associate = function(models) {
    this.belongsToMany(models.PhotoCategory, {
      through: "UserCategory"
    });
  };*/
  return User;
};