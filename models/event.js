module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("event", {
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventTime: DataTypes.STRING,
    eventDescription: DataTypes.TEXT
  });
  return Event;
};
