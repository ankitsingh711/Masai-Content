const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("employee", "root", "ankit2127", {
    host: "localhost",
    dialect: "mysql"
});


let address = {
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const Employee = sequelize.define("emp", {
    _id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        allowNull: false
    },
    employee_id: {
        type: DataTypes.NUMBER,
        autoIncement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    job_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    salary: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
})

Employee.address = address;

module.exports = { Employee };