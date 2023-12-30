const express = require("express");
const app = express();
const fs = require("fs");
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/uploads`)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+".jpg");
    }
  })
  
  const upload = multer({ storage: storage })

app.post("/profile",upload.single("avatar"),(req,res,next)=>{
    const data = req.file;
    res.send(data)
})

//Uplaod many images at a time:

app.post('/photos/upload', upload.array('photos', 3), function (req, res, next) {
  const data = req.file;
  res.send(data);
})

let port=8900;
app.listen(port, ()=>{
    console.log(`Server is running on localhost:${port}`);
})