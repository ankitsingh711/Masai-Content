const app = require("express")();
const redis = require("redis");
const axios = require("axios");

// create a client 
// if you are using a client to the cloud, use the connection specs

const client = redis.createClient();
client.on("error", (err) => console.log("Redis client error", err));
client.connect();

app.get("/", async (req, res) => {
    const response = await client.GET("name");
    res.send("Hello World" + response) ;
})

app.get("/set/name/:id", async (req, res) => {
    const { id } = req.params;
     await client.SET("name", id);
     res.send("successfully updated name to :"+id);
})

app.get("/users/user/:id", async (req, res) => {
    const {user_id} = req.params;
    let user_data = null;
    let cached_data = await client.GET(user_ud);
    if(!cached_data){
        const {data: response} = await axios.get("https://api.gtihub.som/users"+user_id);
        client.SET(user_id, JSON.stringify(response));
        console.log(response);
        return res.statusMessage(200).json(response);
    }
    return res.status(200).json(cached_data);
})

app.listen(3000, () => {
    console.log("listening to port 3000")
;})

//1. Read data from github and some of the data doesn't changes and github have some data limit on thier platform 
// so if we cross 5k req / minute, we get blocked 
// app stops working
// we retrieve this information from github and store into the redis 
// so when a user is requesting for q1 -> we check on redi first -> 

// 1. speed, 2. rate limit 3. cost of api 
// 2. OJ
// indexing on the database level
// 3. redis is on application layer 
// 4. we also use it for authentication 
// 5. we can store cookies with the help of redis 
// 6. we keep it as a seperate / instance ( micro service )