const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


app.get("/", (req,res)=>{
    res.send("Base API endpoint");
})

const CLIENT_ID = "5d2a7dbcaa51984c260c";
const CLIENT_SECRET = "146f8e956e28665faf39cb3a35d02450cd436fbe"; 

app.get("/githuboauth", async (req,res)=>{
    const code = req.query.code;
    const Access_token = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code
        })
    }).then((res)=> res.json());
    
    const user_details = await fetch("https://github.com/user", {
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${Access_token.access_token}`
        }
    })
    console.log(user_details)
    res.send('singup in pogress');
})



//GitHub Oauth service provider ->
app.get("/login", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(9900, ()=>{
    console.log("Server is running on the 9900")
})