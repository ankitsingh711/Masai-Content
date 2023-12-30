// Defining the datatypes of object

// let obj: {
//     id: number,
//     name: string,
//     isPassed: boolean,
// } = {
//     id: 1,
//     name: "ankit singh",
//     isPassed: false
// }

// let obj: {
//     id: number,
//     name?: string
// } = {
//     id: 1
// }

// By putting the question marks we can assure that name is not complusory
// console.log(obj);

// let obj: {
//     [a: string] : string
// } = {abcd: "haja", jaka:"ajjaj"}

// enum Status {
//     active = "ACTIVE",
//     live = "LIVE",
//     suspended = "SUSPENDED"
// }

// let abcdef: Status = Status.active;

// let up = 0;
// let down = 1;
// const cobj = {
//     up,
//     down
// }

// note: enum can take automatic values of their indxes but only if we don't define the value

//Tuples
// tuple will only take two numbers as we defined
// let tuple: [number, number] = [1,2]

let tuple: Array<[string,string]> = [["2","2"]]