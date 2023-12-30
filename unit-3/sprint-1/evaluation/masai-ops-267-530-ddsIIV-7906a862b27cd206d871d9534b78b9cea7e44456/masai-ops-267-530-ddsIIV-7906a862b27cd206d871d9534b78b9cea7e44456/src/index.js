function studentData(fname,lname,age,marks,...rest) {
  let obj = {
    firstName:fname,
    lastName:lname,
    fullName:fname+lname,
    age,
    marks:marks,
    hobbies:[...rest],
    getInfo: function(){
      return `${this.firstName} ${this.lastName}'s age is ${this.age}.`;
    },
    getResult: function(){
      let arr = this.marks;
      let total=arr.reduce((acc,elem)=>{
        return acc+elem;
      },0)

      let avg = total/arr.length;
      if(avg < 50){
        return "Result: FAIL";
      }else if(avg >= 50){
        return "Result: PASS";
      }
    }
  }
  return obj;
}

studentData('Vivek','Agarwal',38,[50,60,70],'Singing','Coding','Medidating');






export {studentData}