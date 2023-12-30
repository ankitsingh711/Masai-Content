const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");

app.use(morgan("combined"));

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})

const logger = (req,res,next) => {
    res.send("Method working");
    next();
}

module.exports = {
    logger
}