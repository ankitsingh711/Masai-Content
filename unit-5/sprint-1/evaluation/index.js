const express = require("express");
const app = express();
require("dotenv").config();
const { Auth } = require("./middleware/auth.middleware.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {connection, UserModel} = require("./db");

app.use(express.json());

app.get("/", (req,res)=>{
    try{
        res.send("Home Page");
    }catch(err){
        console.log(err);
    }
})

app.post("/signup", async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        bcrypt.hash(password, 6, async (err, hash) => {
            if(err){
                console.log(err);
            }else{
                const data = new UserModel({name,email, password: hash});
                await data.save();
                res.send({message: "SignUp Successfyl"});
            }
        })
    }catch(err){
        console.log(err);
    }
})

app.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    try{
        const data = await UserModel.findOne({email});
        if(data){
            bcrypt.compare(password, data.password, async(err, decoded)=>{
                if(err){
                    console.log(err);
                    res.send()
                }else{
                    const token = jwt.sign({email}, "secret");
                    res.send({message:"Login Success", token});
                }
            })
        }else{
            res.send("User not found");
        }
    }catch(err){
        console.log(err);
    }
})

app.use(Auth);

app.get("/reports", async(req,res)=>{
    try{
        res.send("All reports");
    }catch(err){
        console.log(err);
    }
})


app.listen(2800, async() => {
    try{    
        await connection;
        console.log("Connected to the DB");
    }catch(err){
        console.log(err);
    }
    console.log(`Connected to the server at port 2800`);
})