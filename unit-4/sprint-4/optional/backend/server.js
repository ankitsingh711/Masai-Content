const express = require("express");
const { connection } = require("./config/db");
const app = express();
const path = require("path");
require("dotenv").config();

const frontend = path.resolve(__dirname, "../");

app.get("/", async(req,res)=>{
    try {
        res.sendFile(`${frontend}/frontend/index.html`);
    } catch (error) {
        console.log(error);
        req.setEncoding("Some error occured");
    }
})

app.post("/users/get", async(req,res)=>{
    try {
        await 
    } catch (error) {
        console.log(error);
        res.send("Some error occured in /users router");
    }
})

let port = process.env.PORT;
app.listen(port, async()=>{
    try {
        await connection;
        console.log("Connected to the DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running on the port ${port}`);
})