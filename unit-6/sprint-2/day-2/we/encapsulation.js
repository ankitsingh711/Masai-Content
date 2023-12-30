class User {
    #birthyear
    name
    constructor(birthyear, name){
        this.#birthyear = birthyear;
        this.name = name;
    }
    printBirthYear = () => {
        console.log(this.#birthyear);
    }
}


const ankit = new User(2001, "ankit")

console.log(ankit)
ankit.printBirthYear()