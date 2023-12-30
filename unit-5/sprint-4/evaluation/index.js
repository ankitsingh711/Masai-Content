const express = require("express");
const app = express();
require("dotenv").config();
const { connection } = require("./config/db");
const { CompanyRouter } = require("./router/company.router");
const { OrdersRouter } = require("./router/orders.router");


app.use(express.json());
app.use("/company", CompanyRouter);
app.use("/orders", OrdersRouter);

app.get("/", async (req, res) => {
    res.send("home page route");
})

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to the DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`App is running on port ${port}`);
})