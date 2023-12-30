const express = require("express");
const app = express();

app.use(express.json());

const Valid = (req, res, next) => {
  try {
    if (
      req.body.title !== undefined &&
      req.body.price !== undefined &&
      req.body.genre !== undefined &&
      req.body.author !== undefined
    ) {
      next();
    }
  } catch (error) {
    console.log(error);
    res.send({
      err: "All the fields are not there",
    });
  }
};

module.exports = {
  Valid,
};
