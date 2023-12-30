const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


app.use(cookieParser);

app.get("/", (req,res)=>{
    const name = req.cookie.name||"";
    res.send(`Welcome ${name}`);
})

app.get("/users", (req,res)=>{
    res.cookie("name", "user", {httpOnly: true, maxAge: 2000});
    res.send("Users page");
})


app.get("/admin", (req,res)=>{
    res.send("Admins page");
})

app.listen(5600, ()=>{
    console.log("Server is running on the port 5600");
})