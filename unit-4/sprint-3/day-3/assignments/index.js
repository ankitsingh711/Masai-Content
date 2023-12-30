const express = require("express");
const app = express();
require("dotenv").config();
const { connection } = require("./config/db");
const { todoRouter } = require("./router/todo.router");

app.use(express.json());
app.use("/todos", todoRouter);


app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (error) {
    console.log("Something went rong while connecting", error);
  }
  console.log(`Server is running on the port ${process.env.port}`);
});
