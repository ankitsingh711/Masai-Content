const {sum,sub,prod,div,sin,cos} = require("./datas");
let crypto = require("crypto");
const process = require("process");
const cmd = process.argv;
const command = cmd[2];
const argument1 = Number(cmd[3]);
const argument2 = Number(cmd[4]);

if(command=="add"){
    console.log(sum(argument1,argument2));
}else if(command==="sub"){
    console.log(sub(argument1,argument2))
}else if(command==="div"){
    console.log(div(argument1,argument2))
}else if(command=="prod"){
    console.log(prod(argument1,argument2))
}else if(command==="sin"){
    console.log(sin(argument1))
}else if(command==="cos"){
    console.log(cos(argument1))
}
