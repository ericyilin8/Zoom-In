"use strict";
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Photocategory = sequelize.define(
    "Photocategory",
    {
      category: DataTypes.STRING,
=======
  var PhotoCategory = sequelize.define(
    "PhotoCategory",
    {
      category: {
        type: DataTypes.STRING
      }
>>>>>>> f35d0c8e62819719ce8d99a9144fecbe5b28298f
    },
    {}
  );

<<<<<<< HEAD
  Photocategory.associate = function(models) {
    this.belongsToMany(models.User, {
      through: "Usercategory"
    });
    this.hasMany(models.Event, {
      onDelete: "cascade"
    });
  };
  return Photocategory;
=======
  PhotoCategory.associate = function(models) {
    this.belongsToMany(models.User, {
      through: "UserCategory"
    });
  };
  return PhotoCategory;
>>>>>>> f35d0c8e62819719ce8d99a9144fecbe5b28298f
};
