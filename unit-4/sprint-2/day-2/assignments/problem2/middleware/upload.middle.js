const upload = (req,res,next) =>{
    console.log("Upload Checking")
    next();
    console.log("Checking completed")
}

module.exports={
    upload
}