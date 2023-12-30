const express = require("express");
const app = express();
const db = require("./models/index");
const UserRouter = require("./Routers/User.router.js");
const { Users, Orders } = require("./models/index")

app.use(express.json());
app.use("/auth", UserRouter);
app.use("/orders", OrdersRouter);

app.get("/", (req,res)=>{
    res.send("Welcome");
})

db.sequelize
  .sync()
  .then(() => {
    app.listen("2300", () => {
      console.log("App is running on port 2300");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to server", err);
  });
