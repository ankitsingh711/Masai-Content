const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Authorization } = require("./auth.middleware.js");

// Middleware
app.use(express.json());

//Connecting to the database and error handling here
const sequelize = new Sequelize("eval_1","root","ankit2127", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(()=>console.log("connected to the sql database"))
.catch((err)=>console.log(err));


// <---------- Orders Schema ------------->
const Orders = sequelize.define("orders", {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "Confirmed",
        allowNull: false,
    }, user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    createdAt: false
});


// <------------ Users Schema ------------------>
const Users = sequelize.define("users", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(1000),
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
});

// <------------ Users Schema ------------------>

const Timeline = sequelize.define("timeline", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
    }
},{
    createdAt: false
});

// <--------- Order Endpoint ---------->

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

app.patch("/orders/:id", async (req, res)=>{
    const ID = req.params.id;
    try {
        const order_data = await Orders.findOne({order_id:ID});
    } catch (error) {
        console.log(error);
    }
})

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


// <-------- Users Endpoint ------------>

app.post("/users/register", (req, res)=>{
    const { name, email, password } = req.body;
    try{
        bcrypt.hash(password, 10, (err, hashpass)=>{
            if(err){
                console.log(err);
            }else{
                Users.create({ name, email, password: hashpass })
                .then(()=>{
                    console.log("user created")
                    res.send("user created successfully");
                })
                .catch((err)=>console.log(err));
            }
        })
    }catch(err){
        console.log(err);
    }
})


app.post("/users/login", Authorization, (req, res) => {
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



// <------------- App is running  on here as defined port --------------->
const port = process.env.PORT;
app.listen(port, () => {
    try{
        console.log("app is running on port", port);
    }catch(err){
        console.log(err);
    }
})