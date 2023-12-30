const fs = require("fs");
const process = require("process");
let command = process.argv;

const cmd2 = command[2];
let cmd3 = command[3];
let cmd4 = command[4];

if(cmd2==="read"){
    fs.readFile(cmd3, {encoding: "utf-8"}, (err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data);
        }
    })
}
else if(cmd2==="append"){
    fs.appendFile(cmd4, ` \n ${cmd3}`, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Your text has been appended successfully")
        }
    })
}

else if(cmd2==="delete"){
    fs.unlink(cmd3,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Your file has been successfully deleted")
        }
    })
}

else if (cmd2 === "rename"){
    fs.rename(cmd3, cmd4, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File name has changed");
        }
    })
}

else if(cmd2 === "create"){
    fs.writeFile(cmd2, cmd3, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("File created success");
        }
    })
}