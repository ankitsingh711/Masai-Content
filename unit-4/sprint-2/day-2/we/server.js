const express = require("express");
const app = express();
const fs = require("fs");
const {timeLogger} = require("./middleware/time.middle");
const {watchMan} =  require("./middleware/watch.middle");
const {logger} = require("./middleware/logger.middle");
// const {addRoll} = require("./middleware/addRoll.middle")

app.use(express.json());

// app.use(watchMan);
// app.use(timeLogger);

app.use(logger);
// app.use(addRoll);

app.get("/", (req,res)=>{
    res.send("Home page")
})

app.get("/data", (req,res)=>{
    const data = fs.readFileSync("./dummy.txt", "utf-8");
    console.log("data here")
    res.send();
})

app.get("/about", (req,res)=>{
    console.log("This is a about page");
    res.send()
})

app.post("/addstudent", (req,res)=>{
    console.log(req.body);
    res.send("Students has been added");
})


let port = 9990;
app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
})