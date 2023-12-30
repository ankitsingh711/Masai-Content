const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const Authenticator = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, "majaak", (err, decoded) => {
      if (err) {
        res.send("invalid token");
      } else {
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Something went wrong");
  }
};

module.exports = { Authenticator };
