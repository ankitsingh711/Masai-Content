module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brandID: { 
      type:DataTypes.INTEGER,
      references: {
        model: "brands",
        key: "id"
      }
    },
  }, {createdAt: false, updatedAt: false});
  return products;
};
