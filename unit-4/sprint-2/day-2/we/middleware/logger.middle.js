const fs = require("fs");

const logger = (req,res,next)=>{
    console.log("enter in logger")
    fs.appendFileSync("./logs.txt", `\n Routes:${req.url} Methds:${req.method}"utf-8`);
    next();
    console.log("track added in logs")
}

module.exports={
    logger
}

