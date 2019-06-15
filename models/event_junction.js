module.exports = function(sequelize, DataTypes) {
  var EventJunction = sequelize.define("event_junction", {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  });
  return EventJunction;
};
