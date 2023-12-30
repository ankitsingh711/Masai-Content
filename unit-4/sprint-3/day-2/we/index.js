const express = require("express");
const app = express();
const { connection, HeroModel } = require("./db.js");

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Welcome");
  res.send(heros);
});
app.get("/heroes", async (req, res) => {
  try {
    let query = req.query.language;
    let power = req.query.power;
    const heros = await HeroModel.find({ language: query, power: power });
    res.send(heros);
  } catch (error) {
    console.log(error);
    res.send(`Error is ${error}`);
  }
});

app.post("/addhero", async (req, res) => {
  try {
    const data = req.body;
    const hero = new HeroModel(data);
    await hero.save();
    console.log(hero);
    console.log(data);
    res.send("Added the hero successfully");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

app.patch("/edithero/:id", async(req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    try {
        await HeroModel.findByIdAndUpdate({_id:id},payload);
        res.send(`Updated the data whose id is ${id}`);
    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
})
let port = 6100;
app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error while connecting to DB");
    console.log(error);
  }
  console.log(`Server is running on the port ${port}`);
});
