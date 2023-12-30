const watchMan=(req,res,next)=>{
    if(req.url=="/data"){
        console.log("Watchman Enter");
        next();
        console.log("watchman out")
    }else{
        next();
        console.log("Byee");
    }
}

module.exports = {
    watchMan
}