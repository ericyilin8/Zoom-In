"use strict";
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      eventName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      eventDate: {
        type: DataTypes.DATE,
        isDate: true
      },
      eventZip: {
        type: DataTypes.STRING,
        validate: {
          len: [5]
        }
      },
      eventDescription: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {}
  );

  Event.associate = function(models) {
    this.belongsToMany(models.User, {
      through: "EventUser"
    });
  };
  return Event;
};
