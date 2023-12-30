const express = require("express");
const app = express();
const fs = require('fs');
const cors = require("cors");
const crypto = require("crypto");
// const id = crypto.randomBytes(16).toString("hex");

app.use(cors());
app.use(express.json()) //middleware


//GET method
app.get("/", (req,res)=>{
    const data = fs.readFileSync("todo.json", "utf-8");
    const temp = JSON.parse(data);
    res.send(temp);
})


//POST method:
    app.post("/", (req, res)=>{
        try {
            const data = fs.readFileSync("todo.json", "utf-8");
            const body = req.body;
            body.id = id;
            const parsed_data = JSON.parse(data);
            parsed_data.push(req.body);
            fs.writeFileSync("todo.json", JSON.stringify(parsed_data));
            res.send("Data is being transeffered");
        } catch (error) {
            console.log(error);
        }
    })

//DELETE method:
    app.delete("/", (req,res)=>{
        try {
            const data = fs.readFileSync("todo.json", "utf-8");
            const parsed_data = JSON.parse(data);
            let arr = parsed_data.filter((elem)=>{
                return elem.status === "Single";
            })
            fs.writeFileSync("todo.json", JSON.stringify(arr));
            res.send("Kaam ho gaya bhai")
        } catch (error) {
            console.log(error);
        }
    })

//PATCH MEthod:

app.patch("/:id",(req,res)=>{
    try {
        const id = req.params.id;
        let data=fs.readFileSync("./todo.json","utf-8")
        let p_data=JSON.parse(data)
        const detail=(req.body);
        let filterData=p_data.filter((e)=>{
        if(id==e.id){
            e.name=detail.name;
            e.stud_code=detail.stud_code;
            e.course = detail.course;
            e.id = id;
        }
        return e;
        })
        fs.writeFileSync("./todo.json",JSON.stringify(filterData))
        console.log(filterData)
        // console.log(id,detail,p_data)
        res.send("Data has been updated and patched");
    } catch (error) {
        console.log(error);
    }
  })

app.put("/:id", (req,res)=>{
    try {
        const id = req.params.id;
        let data = fs.readFileSync("./todo.json", "utf-8");
        let p_data = JSON.parse(data);
        const detail = (req.body);
        detail.id = +id;
        let filterData = p_data.filter((e)=>{
            return e.id != id;
        })
        filterData.push(detail)
        fs.writeFileSync("./todo.json", JSON.stringify(filterData));
        res.send("Data has been updated");
        } catch (error) {
            console.log(error);
        }
})

let port = 9900;
app.listen(port, ()=>{
    console.log(`Server is running on the ${port}`);
})