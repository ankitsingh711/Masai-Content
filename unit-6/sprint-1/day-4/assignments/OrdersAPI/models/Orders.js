module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("orders", {
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        total_price: DataTypes.INTEGER
    })
    return Orders;
}