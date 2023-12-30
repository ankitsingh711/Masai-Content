const app = require("express")();

const winston = require("winston");

const expressWinston = require("express-winston");

const port = 8000;

const logger = winston.createLogger({
    level:"info",
    transports:[
        new winston.transports.File({
            filename:"app.log",
            level:"info",
        }),
        new winston.transports.File({
            filename: "error.log",
            level:"error",
            timestamp:Date.now,
        }),
        new winston.transports.File({
            filenem: "warn.log",
            level: "warn",
            timestamp: Date.now,
        }),
    ],
});

app.get("/warning", (req, res) => {
    logger.log("warn", "Logging a warning message")
    res.send("logged a warning")
})

app.get("/error", (req, res) => {
    logger.log("error", "LOgging a error message");
    res.sen("logged a error")
});



// winston.configure({
//     transports: [
//         new winston.transports.File({
//             filename: "app.log"
//         })
//     ]
// })

app.get("/", (req,res)=>{
    res.send("Success")
})
app.listen(port, ()=>{
    console.log("listening on port 8000");
    winston.log("info", "Application started on port:"+port)
;})