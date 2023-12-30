const jwt = require("jsonwebtoken");


const Auth = (req,res,next) => {
    const token = req.headers.authorization;
    try{
            jwt.verify(token, "secret", (err, decoded)=>{
                if(err){
                    console.log(err);
                    res.send("Unauthorized");
                }else{
                    next();
                }
            })
    }catch(err){
        console.log(err);
        res.send("invalid user");
    }
}

module.exports = { Auth };