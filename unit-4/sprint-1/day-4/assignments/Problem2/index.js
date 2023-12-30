const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("This is a home page of our application.");
    }else if(req.url==="/textasync"){
        fs.readFile("./files.txt/files1/gistfile1.txt", {encoding: "utf-8"}, (err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.end(data);
            }
        })
    }else if(req.url==="/textsync"){
        try {
            const data = fs.readFileSync("./files.txt/files1/gistfile1.txt", {encoding:"utf-8"});
            res.end(data);
        } catch (error) {
            console.log(error)
        }
    }else if(req.url==="/textstream"){
        let readStream = fs.createReadStream("./files.txt/files1/gistfile1.txt");
        readStream.on("open", ()=>{
            readStream.pipe(res);
        });
        readStream.on("error", (err)=>{
            res.end(err);
        })
    }else if(req.url==="/textpromise"){
        const fsPromises = require("fs").promises;
        fs.promises.readFile("./files.txt/files1/gistfile1.txt")
        .then((r)=>{
            res.end(r);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    else{
        res.end("404 Not found")
    }
})

let port = 3200;
server.listen(3200, ()=>{
    console.log("Server is running on the port",port)
})