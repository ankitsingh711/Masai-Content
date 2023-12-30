module.exports = (sequelize, DataTypes) => {
  const brands = sequelize.define("brands", {
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
  }, {createdAt: false, updatedAt: false});
  return brands;
};
