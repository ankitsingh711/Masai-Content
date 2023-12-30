const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {BookModel} = require("../model/books.model");
const BookRouter = express.Router();

app.use(express.json());

//Get the book of particular genre:
BookRouter.get("/", async (req,res,next)=>{
    const genre = req.query.genre;
    try{
        if(genre!==undefined){
            const data = await BookModel.find({},{genre:genre});
            res.send(data);
        }else{
            next();
        }
    }catch(err){
        console.log(err);
        res.send("Error while getting the particular genre book");
    }
})

//Price low and Price High Books:
BookRouter.get("/", async (req,res,next)=>{
    const low_price = req.query.low_price;
    const high_price = req.query.high_price;
    try {
        if(low_price!==undefined&&high_price!==undefined){
            const data = await BookModel.find({price:{$gte:low_price,$lte:high_price}});
            res.send(data);
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.send("Error while getting the between price books");
    }
})


// Get method getting books
BookRouter.get("/", async(req,res)=>{
        try {
            const data = await BookModel.find();
            res.send(data);
        } catch (error) {
            console.log(error);
            res.send("Something went wrong while getting data");
        }
})

//Adding books to the DB:
BookRouter.post("/", async (req,res)=>{
    try {
        const data = new BookModel(req.body);
        await data.save();
        res.send("Book added to the DB");
    } catch (error) {
        console.log(error);
        res.send("Error while adding the books to the database");
    }
})

//Patch Method:
BookRouter.patch("/:id", async(req,res)=>{
    const id = req.params.id;
    try{
        const data = await BookModel.findByIdAndUpdate(id, req.body);
        data.save();
        res.send(`Book data updated by patch of id:${id}`);
    }catch(err){
        console.log(err);
        res.send("Error while patching the data");
    }
})


//Put Method:
BookRouter.put("/:id", async(req,res)=>{
    const id = req.params.id;
    try{
        const data = await BookModel.findByIdAndUpdate(id, req.body);
        data.save();
        res.send(`A Book Whole Data Updated of Id: ${id}`); 
    }catch(err){
        console.log(err);
        res.send("Error while updating the data by put");
    }
})

//Delete Method:
BookRouter.delete("/:id", async(req,res)=>{
    const id = req.params.id;
    try{
        await BookModel.findByIdAndDelete(id);
        res.send(`Book of id:${id} deleted from the DB`);
    }catch(err){
        console.log(err);
        res.send("Error while deleting the book of id",id);
    }
})


module.exports = {
    BookRouter
}