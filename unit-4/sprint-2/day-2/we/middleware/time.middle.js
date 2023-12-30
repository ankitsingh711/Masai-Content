const timeLogger = (req,res,next)=>{
    if(req.url=="/about"){
        console.log("time enter");
        next();
        console.log("time out");
    }else{
        console.log("Go to watchman")
    }
}

module.exports = {
    timeLogger
}