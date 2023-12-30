const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Base API Endpoint");
})

app.post("/signup", (req,res)=>{
    const {name,email,password} = req.body;

})


app.post("/login", (req,res)=>{
    const {email, password} = req.body;
    const user = UserModel.find({email});
    res.send("Login Success");
})

app.get("/logout", (req,res)=>{
    const token = req.headers.authorization?.split(" ")[1];
    const blacklistedData =
    JSON.parse(fs.readFileSync("./blackilst.json", "utf-8"));
    fs.writeFileSync('./blacklist.json', JSON.stringify(blacklistedData));
    res.send("")
})

app.listen(9090, (req,res)=>{
    console.log(`Server is running on the port `);
})