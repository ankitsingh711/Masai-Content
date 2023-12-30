const fs = require("fs");
const { UserModel } = require("../model/user.model");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const Logger = async (req, res, next) => {
  const username = req.body.username;
  try {
    const data = await UserModel.find({ username });
    if (data.length > 0) {
      const role = data[0].role;
      const username = data[0].username;
      fs.appendFileSync("./log.txt", `Username:${username} and Role:${role}`);
      next();
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
};

module.exports = {
  Logger,
};
