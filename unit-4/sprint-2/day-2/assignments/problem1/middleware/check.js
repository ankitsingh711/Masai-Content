const express = require("express");
const app = express();

app.use(express.json());
const check_details = (req,res,next) =>{
    let bodys = req.body;
    if(req.url=="/movies" && req.method=="POST"){
        if(bodys.name!=undefined && bodys.rating!=undefined && bodys.description!=undefined && bodys.genre!=undefined && bodys.cast!==undefined){
            if(typeof(bodys.name)=="string" && typeof(bodys.rating)=="number" && typeof(bodys.description)=="string" && typeof(bodys.genre)=="string" && typeof(bodys.cast)=="string"){
                next();
            }
        }
    }else{
        console.log("Something wrong happen")
        res.status(404).send("Something went wrong");
    }
}

module.exports = {
    check_details
}