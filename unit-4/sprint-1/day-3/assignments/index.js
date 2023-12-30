// const palindrome = require("is-this-palindrome");
// let isPalindrome = palindrome.isPalindrome;
// console.log(isPalindrome("abac"));

const fs = require("fs");
// read file from file-system i.e "fs";

// try{
//     fs.readFile("lecture.txt", {encoding: "utf-8"}, (err, data) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data);
//         }
//     })
// }catch(err){
//     console.log(err);
// }

//read file synchronous manner;

// const data = fs.readFileSync("lecture.txt", {encoding: "utf-8"});
// console.log(data);

//write file from module file system;

// fs.writeFile("lecture.txt", "Hello I am ankit singh and I am nowjust changing the contect of this file for larning purpose.", (err)=>{
//     if(err){
//         console.log("Some erroe has occured while writing the file")
//     }else{
//         console.log("Your file has been added and successfully written")
//     }
// })


//append file from file - system:

// fs.appendFile("lecture.txt", "Hello I am Anshu Singh and I still love Ankit but due to some issu I have to broke up and after some time I will text Ankit and I will try to persuade him at one point of time because he loves me always  and I have done enough good for him.", (err)=>{
//     if(err){
//         console.log("Error is", err);
//     }else{
//         console.log("File appended");
//     }
// })

//delete file form file system:

// fs.unlink("lecture.txt", (err)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log("Your file has been succesfully deleted for the file");
//     }

// })