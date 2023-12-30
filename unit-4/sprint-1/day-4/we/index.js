const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("This is a homepage.")
    }else if(req.url==="/data"){
        fs.readFile("./data.json", (err, data)=>{
            if(err){
                res.write(err);
                res.end();
            }else{
                res.end(data);
            }
        })
    }else if(req.url==="/all"){
        res.end("THis is the all data having.")
    }else{
        res.end("404 Error Occured");
    }
})

server.listen(8000, ()=>{
    console.log("The port is running on 8000");
});