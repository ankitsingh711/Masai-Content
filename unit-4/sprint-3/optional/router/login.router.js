const express = require("express");
const app = express();
const path = require("path");
const LogIn = express.Router();
const { UserModel } = require("../model/user.model");
const new_path = path.join(__dirname, "../");
const jwt = require("jsonwebtoken");
const { Logger } = require("../middleware/logger.midlleware");
const bcrypt = require("bcrypt");

app.use(express.json());

LogIn.get("/", (req, res) => {
  try {
    res.sendFile(path.join(`${new_path}/view/login.html`));
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

LogIn.post("/", Logger, async (req, res) => {
  const { username, password } = req.body;
  try {
    const data = await UserModel.find({ username });
    if (data.length > 0) {
      bcrypt.compare(password, data[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ location: username }, "majaak", {
            expiresIn: "1h",
          });
          console.log(token);
          res.redirect("/");
        } else {
          res.send("Invalid Password");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Error while posting users");
  }
});

module.exports = {
  LogIn,
};
