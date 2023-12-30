const express = require("express");
const Sequelize = require("sequelize");
const app = express();

const sequel = new Sequelize("first_database", "root", "ankit2127", {
    host:"localhost",
    dialect:"mysql2"
});

const schema = sequel.define("students", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    age: Sequelize.INTEGER
})

app.post("/api/create", async (req, res) => {
    const {name, email, age} = req.body;
    try{
        const data = await scheam.create({
            name,
            email,
            age
        })
        res.status(200).send("Data created");
    }catch(err){
        console.log(err)
    }
})

app.get("/api/students", async (req,res)=>{
    try{
        const data = await schema.findAll();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
    }
})


sequel.sync().then(()=>{
    app.listen(3100, () => {
        console.log("Server Started");
    })
})
.catch((err)=>{
    console.log("Error while connecting to server");
})


// We can install sequelize-cli to write the boiler plate for us to connect sql
// npx sequelize-cli init

//Steps Invloved:
// 1. Install sequelize-cli 
// 2. npx sequelize-cli init
// 3. Provide Db Details in config.json file
// 4. Define models in models folder;