const express = require("express");
const app = express();
const SignUp = express.Router();
const path = require("path");
const { UserModel } = require("../model/user.model");
const new_path = path.join(__dirname, "../");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

app.use(express.json());

SignUp.get("/", (req, res) => {
  try {
    res.sendFile(path.join(`${new_path}/view/signup.html`));
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

SignUp.post("/", async (req, res) => {
  const {username,email,dob,role,location,password,confirm_password} = req.body;
  try {
    bcrypt.hash(password, 5, async (err, encrypt_password) => {
      if(err){
        console.log(err);
      }else{
        if (req.body.password === req.body.confirm_password) {
          const data = new UserModel({username,email,dob,role,location,password:encrypt_password,confirm_password:encrypt_password});
          await data.save();
          res.redirect("/login");
        } else {
          res.send("Password do not matched");
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.send("Error While Registering");
  }
});

module.exports = {
  SignUp,
};
