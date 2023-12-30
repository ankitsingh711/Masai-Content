const mongoose = require("mongoose");

const main = async () => {
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/school");
    console.log("Connected to Mongo");
    await Studentmodel.insertMany([{name:"Ayushi",age:18,city:"Kolkata",is_married:false}]);
    const student = new Studentmodel({
        name:"Pulkit",
        age:"100",
    });
    await student.save();
    console.log("Following is the data from the database");
    // const students = await Studentmodel.find({},{city:"Pune"});o
    // console.log(students);
    connection.disconnect();
    console.log("Disconnected");
  } catch (error) {
    console.log("Connot connect to the database");
    console.log(error);
  }
};

main();

const studentSchema = mongoose.Schema({
  name: {type: String, require:true},
  age: {type: Number, require:true},
  city: {type: String, require:true},
  location:{type: String, require:true},
  is_married:{type: Boolean, require:true}
},{
    versionKey:false
});

const Studentmodel = mongoose.model("student", studentSchema);
