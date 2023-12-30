const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const app = express();
const cors = require("cors");
const path = require("path");
const { LogIn } = require("./router/login.router");
const { SignUp } = require("./router/signup.router");
const { Home } = require("./router/index.router");
const { About } = require("./router/about.router");
const {Authenticator} = require("./middleware/auth.middleware");
const {Logger} = require("./middleware/logger.midlleware");
const {Validator} = require("./middleware/valid.middleware");
const { UserModel } = require("./model/user.model");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "view")));
app.use("/", Home);
app.use("/about", About);
app.use("/login", LogIn);
app.use("/signup", SignUp);

let port = process.env.PORT;
app.listen(port,async() => {
  try {
    await connection;
    console.log(`Connected to DB`);
  } catch (err) {
    console.log(err);
    res.send("Error While Connecting");
  }
  console.log(`Server is running on the port ${port}`);
});
