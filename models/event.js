"use strict";
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      eventName: DataTypes.STRING,
      eventDate: DataTypes.DATE,
      eventZip: DataTypes.STRING,
      eventDescription: DataTypes.TEXT
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
