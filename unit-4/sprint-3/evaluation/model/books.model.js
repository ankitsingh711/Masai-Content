const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: {type:String, required:true},
    genre: {type:String, required:true},
    price:{type:Number, required:true},
    author: {type:String, required:true}
},{
    versionKey:false
})

const BookModel = mongoose.model("books_collection", bookSchema);

module.exports = {
    BookModel
}