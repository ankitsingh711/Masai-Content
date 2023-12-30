const express = require("express");
const srouter = express.Router();

srouter.get("/students", (req,res)=>{
    res.send("This is the student page")
})

srouter.get("/addstudent", (req,res)=>{
    res.send("Students has been added");
})

module.exports = {
    srouter
}