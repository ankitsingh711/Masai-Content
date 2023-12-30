function UserInfo(name,location) 
{
    this.name = name;
    this.location = location;
}

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`
}
function serveIn(name,location,food) {
    return `Serving ${food} to ${name} in ${location}`
}
function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}
function generateInVoice(name,location,quantity,price) {
    let total = quantity*price;
    return `${name}'s bill is INR ${total}`
}

const r = new UserInfo("Ankit", "Ballia");
console.log(r);
const s = serveFood.call(UserInfo,"Cake");
const r1 = serveIn.bind(serveFood,"Ankit","Ballia","Cake");
console.log(r1);
const r2 = billNote.bind(UserInfo,300);
console.log(r2);
let a1 = generateInVoice.bind(billNote,"Ankit","Ballia",2,500);
console.log(a1);

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
