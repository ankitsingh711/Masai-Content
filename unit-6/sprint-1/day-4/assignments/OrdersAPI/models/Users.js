module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        email: {type: DataTypes.STRING, allowNull: false, unique: true},
        password: DataTypes.STRING
    }, {createdAt: false, updatedAt: false})
    return Users;
};