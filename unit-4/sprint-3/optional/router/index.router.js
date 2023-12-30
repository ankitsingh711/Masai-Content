const express = require("express");
const Home = express.Router();
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { UserModel } = require("../model/user.model");
const new_path = path.join(__dirname,"../");
app.use(express.json());

Home.get("/", (req, res) => {
  try {
    res.sendFile(`${new_path}/view/index.html`);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

module.exports = {
  Home,
};
