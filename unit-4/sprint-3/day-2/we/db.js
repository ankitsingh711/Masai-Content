const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://ankit:ankitsingh@zomato.glr5m.mongodb.net/?superherosretryWrites=true&w=majority");

const heroSchema = mongoose.Schema({
    name:{type:String,require:true},
    city:{type:String,require:true},
    power:{type:String,require:true},
    villan:{type:String,require:true},
    language:{type:String,require:true},
    isActive:{type:Boolean,require:true}
},{
    versionKey:false
});



const HeroModel = mongoose.model("hero", heroSchema);

module.exports = {
  connection,
  HeroModel
};
