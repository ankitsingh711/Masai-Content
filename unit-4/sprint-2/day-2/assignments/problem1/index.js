const express = require("express");
const app = express();
const {check_details} = require("./middleware/check");
const fs = require("fs");
const crypto = require("crypto");
const {movies} = require("./router/movies.router");
app.use(express.json());
app.use(check_details);
app.use("/", (movies));

app.post("/",(req,res)=>{
    const body = req.body;
    console.log(body);
    res.send()
})

let port=2200;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})