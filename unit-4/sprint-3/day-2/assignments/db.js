const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/movies");

const movieSchema = mongoose.Schema({
    name:{type:String,require:true},
    rating:{type:Number,require:true},
    release:{type:Number,require:true},
    language:{type:String,require:true},
    genre:{type:String,require:true},
    description:{type:String,require:true}
},
{
    versionKey:false
})

const MovieModel = mongoose.model("film", movieSchema);

module.exports = {
    connection,
    MovieModel
}