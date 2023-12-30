const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");


const sequelize = new Sequelize("day4_assignments", "root", "ankit2127", {
  host: "localhost",
  dialect: "mysql" 
});

sequelize.authenticate().then(()=>console.log("connected to the sql")).catch((err)=>console.log(err));

const Users = sequelize.define(
  "users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
  }
);

const Authorization = (req, res, next) => {
  const {email, password } = req.body;
    try{
        const user = sequelize.sync().then(() => {
            Users.findByPk(email)
              .then((data) => {
                if (data) {
                  const pass = data.password;
                  bcrypt.compare(pass, password, (err, got) => {
                    if (err) {
                      console.log(err);
                    } else {
                      next();
                    }
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          });
    }catch(error){
        console.log(error);
    }
}

module.exports = { Authorization };