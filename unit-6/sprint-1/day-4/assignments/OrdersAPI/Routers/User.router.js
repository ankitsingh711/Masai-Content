const express = require("express");
const UserRouter = express.Router();
const Users = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// <-------- Get all users who have registered --------> 

UserRouter.get("/", async (req,res)=>{
  try {
    const data = await Users.findAll();
    res.status(200).json({
      isError: false,
      data: data
    })
  } catch (error) {
    res.status(400).json({
      isError: true,
      error: error
    })
    console.log(error)
  }
})

// <--------- Register User ------------>

UserRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    bcrypt.hash(password, 10, async (err, hashPass) => {
      if (err) {
        res.status(400).json({
          isError: true,
          err
        })
      } else {
        const user = await Users.create({
          email,
          password: hashPass,
        });
        res.status(200).json({
          isError: false,
          msg: "User Registered Successfully",
          user
        })
      }
    });
    res.send("data has been created", user);
  } catch (error) {
    res.send(error);
  }
});

// <---------- Login User -------------->

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDetail = await Users.find({
      where: {
        email: email,
      },
    });
    const hashPass = userDetail.password;
    bcrypt.compare(password, hashPass, async (err, success) => {
      jwt.sign({ email }, "secretkey", (err, token) => {
        if (err) {
          res.status(400).json({
            isError: true,
            err
          })
        } else {
          res.status(200).json({
            isErrror: false,
            token,
            msg: "Login Success",
          });
        }
      });
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

module.exports = UserRouter;
