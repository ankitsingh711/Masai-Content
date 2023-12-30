const express = require("express");
const app = express();
const fs = require("fs");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get("/", (req,res)=>{
    res.send("Home page router");
})

app.get("/login", async(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})



app.listen(7700, ()=>{
    console.log("Server is running on the port 7700");
})