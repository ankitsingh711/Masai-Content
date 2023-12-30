const express = require("express");
const app = express();
const fs = require("fs");
// const {validate} = require("./middleware/check.middleware");
const {all} = require("./middleware/logger.middleware");

app.use(all);
// app.use(validate);
app.use(express.json());

app.get("/posts", (req, res) => {
    const data = fs.readFileSync("./posts.json", "utf-8");
    const p_data = JSON.parse(data);
  res.send(p_data[0]);
});
let port = 8700;
app.listen(port, () => {
  console.log(`Server is running on the port http://localhost:${port}`);
});

// app.post("/posts/create", (req, res) => {
//   const data = fs.readFileSync("./posts.json", "utf-8");
//   const p_data = JSON.parse(data);
//   let temp = p_data;
//   req.body.id = id++;
//   let body = req.body;
//   temp.push(body);
//   fs.writeFileSync("./posts.json", JSON.stringify(temp));
//   res.send("Post added successfully");
// });

// app.patch("/posts/:id", (req,res)=>{
//     let id = req.params.id;
//     const data = fs.readFileSync("./posts.json", "utf-8");
//     const p_data = JSON.parse(data);
//     console.log(p_data[0]);
//     res.send("Data has been modified");
// })
