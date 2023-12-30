const express = require("express");
const app = express();
app.use(express.json());
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Authorization } = require("./auth.middleware");

const sequelize = new Sequelize("day4_assignments", "root", "ankit2127", {
  dialect: "mysql",
  host: "localhost",
});

sequelize
  .authenticate()
  .then(() => console.log("connected to the database"))
  .catch(() => console.log("failed to connect to the database"));

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

app.post("/auth/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try {
    bcrypt.hash(password, 10, (err, hashpassword) => {
      if (err) {
        console.log(err);
      } else {
        sequelize.sync().then(() => {
          Users.create({ name, email, password: hashpassword }).then(() =>
            console.log("user created successfully")
          );
          res.send("Signup Success");
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/auth/login", Authorization, (req, res) => {
  const { email, password } = req.body;
  try {
    jwt.sign({ email }, "secretkey", (err, token) => {
        if (token) {
          res.send({ message: "logged in", token: token });
        } else {
          console.log(err);
        }
      });
  } catch (error) {
    console.log(error);
  }
});

// Orders Schema 
const Orders = sequelize.define("orders", {
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

app.post("/orders/create", (req, res) => {
    const token = req.headers.authorization;
    const { name, quantity, price } = req.body;
  try {
    jwt.verify(token, "secretkey", (err, decoded)=>{
        if(decoded){
            Orders.create({name, quantity, price})
            .then(()=>{
                console.log("order created successfully"); 
                res.send("order created successfully");
            });
        }else{
            console.log(err);
            res.send("Log in first to add orders");
        }
    })
  } catch (error) {
    console.log(error);
  }
});

app.delete("/orders/delete", (req, res) => {
  const token = req.headers.authorization;
  try{
    jwt.verify(token, "secretkey", (err, decoded)=>{
      if(decoded){
          
      }else{
          console.log(err);
          res.send("Log in first to add orders");
      }
  })
  }catch(err){
    console.log(err);
  }
});

app.get("/orders", (req, res) => {
  const token = req.headers.authorization;
  try{
    jwt.verify(token, "secretkey", (err, decoded)=>{
      if(decoded){
        Orders.findAll().then((data)=>{
          res.send(data);
        })
      }else{
        console.log("please login first");
      }
    })
  }catch(err){
    console.log(err);
  }
});

let port = process.env.PORT;
app.listen(port, () => {
  console.log("app is running on the port", port);
});
