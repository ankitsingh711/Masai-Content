const express = require("express");
const mongoose = require("mongoose");
const { connection } = require("./db.js");
const app = express();
const { BookRouter } = require("./router/books.router");
require("dotenv").config();
const { Valid } = require("./middleware/valid.middleware");
const { Record } = require("./middleware/record.middle");

app.use(express.json());
// app.use(Valid);
app.use(Record);
app.use("/books", BookRouter);

let port = process.env.PORT;
app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
    res.send("Error while connecting to DB");
  }
  console.log(`Server is running on port ${port}`);
});
