const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");


const { connection } = require("./config/db");
const { cricketModel } = require("./model/schema");


const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  app.post("/updatescores", async (req, res) => {
    console.log(req.body);
    try {
      let data = new cricketModel(req.body);
      await data.save();
      console.log(data);
      res.send({ Message: "Scores has been updated" });
    } catch (error) {
      throw error;
    }
  });

  io.on("connection", (socket) => {
    cricketModel.find({}, (error, scores) => {
      if (error) {
        console.log (error);
      } else {
        socket.emit("scores", scores);
      }
    });
  });

  
  server.listen(process.env.port, async () => {
    try {
      await connection;
      console.log("connected to database");
    } catch (error) {
      console.log (error);
    }
    console.log(`Server is running at port${process.env.port}`);
  });

