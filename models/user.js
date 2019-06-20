"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true
      },
      password: {
        type: DataTypes.STRING
      },
      zip: {
        type: DataTypes.INTEGER,
        validate: {
          len: [5]
        }
      }
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
