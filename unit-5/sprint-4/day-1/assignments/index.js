const app = require("express")();
const redis = require("redis");
require("dotenv").config();

const redisClient = redis.createClient();

redisClient.connect();
redisClient.on("connect", (errr) => {
    console.log("Connected to redis");
})

app.get("/", async (req, res) => {
    let key = "normalkey";
    let obj = {
        id: 12,
        name: "Ankit Singh"
    }
    let response;
    let getCachedData = await redisClient.get(key);
    if(getCachedData)
    {
        console.log("GET Cache");
        response = obj;
    }
    else
    {
        console.log("Set Cached");
        redisClient.set(key, JSON.stringify(obj));
    }
    console.log(response);
    res.status(200).json(response);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
