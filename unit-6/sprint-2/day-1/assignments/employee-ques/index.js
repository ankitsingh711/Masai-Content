const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const { EmployeeRouter } = require("./router/employee.router");
require("dotenv").config();

app.use(express.json());
app.use("/", EmployeeRouter);

const sequelize = new Sequelize("employee", "root", "ankit2127", {
  host: "localhost",
  dialect: "mysql",
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connected to the Database");
  } catch (err) {
    console.log(err);
  }
})();

let port = process.env.PORT;
app.listen(port, () => {
  console.log("App is Running on Port", port);
});

module.exports = { sequelize };
