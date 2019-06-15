module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("event", {
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventZip: DataTypes.STRING,
    eventDescription: DataTypes.TEXT
  });
  return Event;
};
