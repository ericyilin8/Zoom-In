module.exports = function(sequelize, DataTypes) {
  var PhotoCatagory = sequelize.define("photo_catagory", {
    catagory: DataTypes.STRING,
  });
  return PhotoCatagory;
};
