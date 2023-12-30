const express = require("express");
const app = express();
const movies = express.Router();
const fs = require("fs");
const crypto = require("crypto");
let id = crypto.randomBytes(16).toString("hex");
app.use(express.json());

movies.post("/movies", (req,res)=>{
    try {
        const data = fs.readFileSync("./movies.json", "utf-8");
        const p_data = JSON.parse(data);
        req.body.id = id;
        p_data.push(req.body);
        fs.writeFileSync("./movies.json", JSON.stringify(p_data));
        res.send("Movies added successfully");
        // console.log('1');
        // res.end()
    } catch (error) {
        res.send(error);
    }
})

module.exports={
    movies
}