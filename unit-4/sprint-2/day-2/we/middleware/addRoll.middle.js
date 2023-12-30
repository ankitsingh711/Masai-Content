const crypto = require("crypto");

const addRoll=(req,res,next)=>{
    if(req.method=="POST"){
        let id = crypto.randomBytes(16).toString("hex");
        req.body.roll_bo=id;
        next();
    }
}

module.exports={
    addRoll
}