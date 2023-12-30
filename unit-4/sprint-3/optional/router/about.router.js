const express = require("express");
const About = express.Router();
const path = require("path");
const app = express();
const new_path = path.join(__dirname, "../");
app.use(express.json());
const jwt = require("jsonwebtoken");
const { Authenticator } = require("../middleware/auth.middleware");

About.get("/", Authenticator, (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    jwt.verify(token, "majaak", (err, decoded) => {
      if (err) {
        res.send("Login first to access this page");
      } else {
        res.sendFile(path.join(`${new_path}/view/about.html`));
      }
    });
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

module.exports = { About };
