const express = require("express");
const app = express();

app.use(express.json());

const validate = (req, res, next) => {
  if (
    req.body.id !== undefined &&
    req.body.Title !== undefined &&
    req.body.Content !== undefined &&
    req.body.Author !== undefined
  ) {
    if (
      typeof req.body.id === "number" &&
      typeof req.body.Title === "string" &&
      typeof req.body.Content === "string" &&
      typeof req.body.Author === "string"
    ) {
      next();
    }
  }else{
    res.send("Something went wrong");
  }
};

module.exports = {
  validate,
};
