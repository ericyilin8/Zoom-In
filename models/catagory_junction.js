module.exports = function(sequelize, DataTypes) {
  var CatagoryJunction = sequelize.define("catagory_junction", {
    userId: DataTypes.INTEGER,
    catId: DataTypes.INTEGER
  });
  return CatagoryJunction;
};
