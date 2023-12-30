const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Based router / Home Page");
})

app.get("/users", (req,res)=>{
    res.send("User page");
})

app.get("/admin", (req,res)=>{
    res.send("Admin page");
})

app.listen(3300, ()=>{
    console.log("Server is running on the port 3300");
})