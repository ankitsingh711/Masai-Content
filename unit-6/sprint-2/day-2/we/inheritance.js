class Vehicle {
    constructor(brand, model){
    this.brand = brand;
    this.model = model;
    }
}

class Scooty extends Vehicle {
numberOftyres = 2;
}

class Car extends Vehicle {
    numberOftyres = 4;
    applyGear = () => {
        console.log("applied gear")
    }
}

const activa = new Scooty("honda", "6g");

const ertiga = new Car("maruti", "ertiga");
console.log(activa, ertiga);