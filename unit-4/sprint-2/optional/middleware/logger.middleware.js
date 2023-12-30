const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");

const all = (req,res,next) => {
    morgan(function (tokens, req, res) {
        fs.appendFileSync("./logs.txt", `${
            [
                tokens.method(req, res),
                tokens.url(req, res),
                tokens["user-agent"](req,res)
              ].join(' ')
        }`)
      })
      console.log("1");
      next();
}

module.exports = {
    all
}