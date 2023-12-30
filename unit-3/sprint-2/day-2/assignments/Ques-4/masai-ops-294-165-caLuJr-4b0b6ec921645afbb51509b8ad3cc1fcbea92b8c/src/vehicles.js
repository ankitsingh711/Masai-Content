// Function constructor
function FourWheeler(model,wheels, color, speed, fuel) {
    this.model = model;
    this.wheels = wheels;
    this.color = color;
    this.speed = speed;
    this.fuel = fuel;
    this.setSpeed = function(s){
        this.speed = s;
    }
    this.updateColor = function(color){
        this.color = color;
    }
    this.updateFuel = function(f){
        this.fuel = f;
    }
}

// Parent object from Object.create
let FourWheelerObject = {
   
}


// Store function contructor object here
var car1 = new FourWheeler('suv',4,'red',200,300);
car1.setSpeed(false);

// Store Object.create here
var car2 = Object.create(car1);
car2.setSpeed(true)

export {car1, car2}