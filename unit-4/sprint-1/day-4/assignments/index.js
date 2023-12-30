const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        fs.readFile("./index.html", {encoding:"utf-8"}, (err,data)=>{
            if(err){
                res.write(err);
                res.end()
            }else{
                res.end(data);
            }
        })
    }else if(req.url==="/user"){
        fs.readFile("db.json", (err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }else{
                res.end(data)
            }
        })
    }else if (req.url==="/data"){
        fs.readFile("db.json", (err, data)=>{
            if(err){
                res.write(err);
                res.end()
            }else{
                res.end(data);
            }
        })
    }else if(req.url==="/src"){
        fs.readFile("src.json", {encoding:"utf-8"}, (err,data)=>{
            if(err){
                res.end(err);
            }else{
                res.end(data);
            }
        })
    }else if(req.url==="/public"){
        res.end("This is the public pager endering from the backend");
    }
    else if(req.url==="/public/other"){
        res.end("This is the other file of the public directory and this is the ending of the page.")
    }else{
        res.end("404 Error Not found")
    }
})

let port = 5500;
server.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
})