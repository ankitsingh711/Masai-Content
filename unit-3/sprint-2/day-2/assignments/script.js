import { Teacher, Person, Engineer } from "./local_modules/main.js";

let p1 = new Person("Ankit Singh");
console.log(p1.name);
console.log(p1.sayHello());
let t1 = new Teacher("Aman");
console.log(t1.teach());
let e1 = new Engineer("Anand");
console.log(e1.earn())