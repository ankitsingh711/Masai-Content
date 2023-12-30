const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Home Page");
})

app.listen(4500, ()=>{
    console.log("Server is running on the port 4500");
})