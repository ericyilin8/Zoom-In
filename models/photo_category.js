"use strict";
module.exports = function(sequelize, DataTypes) {
  var Photocategory = sequelize.define(
    "Photocategory",
    {
      category: DataTypes.STRING,
    },
    {}
  );

  Photocategory.associate = function(models) {
    this.belongsToMany(models.User, {
      through: "UserCategory",
      foreignKey: "userId_Usercategory"
    });
    this.hasMany(models.Event, {
      onDelete: "cascade",
      foreignKey: "PhotocategoryId_Event"
    });
  };
  return Photocategory;
};
