const http = require("http");
const fs = require("fs");
const dns = require("dns");
const cowsay = require("cowsay");

const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        res.end(`<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>`);
    }
    else if(req.url==="/writeinfile"){
        fs.writeFile("employee.txt","Employee names are as follows:", (err)=>{
            if(err){
                console.log(err);
            }else{
                res.end(`<h1>Data has been written in the file</h1>`);
            }
        })
    }
    else if(req.url==="/enternames"){
        let arr = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
        fs.appendFile("employee.txt", `\n ${arr.join("\n")}`, (err)=>{
            if(err){
                console.log(err);
            }else{
                res.end(`<h1>All the names added in the file</h1>`);
            }
        })
    }else if(req.url==="/address"){
        let hostname = "www.masaischool.com"
        dns.lookup(hostname, (err,add,family)=>{
            if(err){
                res.end(err);
                console.log(err);
            }else{
                res.end(add);
            }
        })
    }else if(req.url==="/delete"){
        fs.unlink("employee.txt", (err)=>{
            if(err){
                console.log(err);
            }else{
                res.end(`<h1>File has been deleted</h1>`);
            }
        })
    }else if(req.url==="/alldetails"){
        fs.readFile("employee.txt", {encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.end(data);
            }
        })
    }
})

server.listen(8000, ()=>{
    console.log("Server is running on the port 8000");
})