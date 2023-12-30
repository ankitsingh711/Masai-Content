const express = require("express");
const app = express();
const {connection, MovieModel } = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});


//Pahination 
app.get("/movies", async (req, res) => {
    let name = req.query.name;
    let rating = req.query.rating;
  try {
    if(name!==undefined){
      const movies = await MovieModel.find({name:name});
      res.send(movies);
    }else if(rating!==undefined){
      const movies = await MovieModel.find({rating:rating});
      res.send(movies);
    }
    else{
      const movies = await MovieModel.find();
      res.send(movies);
    }
  } catch (error) {
    console.log(error);
  }
});


app.post("/addmovie", async (req, res) => {
    const data = req.body;
  try {
    const movie = new MovieModel(data);
    await movie.save();
    res.send("Movies added to the daatabse");
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
});


//Updating the movie by it's id:
app.patch("/editmovie/:id", async (req,res)=>{
    const id = req.params.id;
    const data = req.body;
    try {
        await MovieModel.findByIdAndUpdate({_id:id},data);
        res.send(`Updated the data whose id is ${id}`);
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
})

//Delete the movie by the id:
app.delete("/delete/:id", async (req,res)=>{
    const id = req.params.id;
    try{
        await MovieModel.findOneAndRemove({_id:id});
        res.send(`Deleted the data of id ${id}`);
    }catch(err){
        console.log(err);
        console.log("Something went wrong");
    }
})

//Searching functionality:

app.get("/movies", async (req,res)=>{
  let query = req.query;
  let q = query.q;
  let name = req.query.q;
  try{
    if(q!==undefined){
      const data = await MovieModel.find({name: {$regex:q,$options:"i"}});
      res.send(data);
    }else{
      const data = await MovieModel.find();
      res.send(data);
    }
  }catch(err){
    console.log(err);
    console.log("Something went wrong");
  }
})

//Sort by the rating:

app.get("/movies", async (req,res)=>{
  const query = req.query.rating;
  try {
    if(query=="asc"){
      const data = await MovieModel.find().sort({rating:1});
      res.send(data);
    }else if(query=="dsc"){
      const data = await MovieModel.find().sort({rating:-1});
      res.send(data);
    }else{
      const data = await MovieModel.find();
      res.send(data);
    }
  } catch (error) {
    console.log("Error",error);
  }
})

let port = 3300;
app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (error) {
    console.log("Error while connecting to the DB");
    console.log(error);
  }
  console.log(`Server running on port ${port}`);
});
