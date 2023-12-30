// Understand the problem
// Entities
// Entities Function
// General Blueprint Entities( implementation )

enum VehicleType {
    CAR,
    BIKE,
    TRUCK
}

class Vehicle {
    #licenseNumber: string;
    #type: VehicleType;
    #person: Person;
    #ticket: Ticket | null;
    constructor(licenseNumber: string, VehicleType, person: Person){
        this.#licenseNumber = licenseNumber;
        this.#type = type;
        this.#person = person;
    }
}

enum PriceByVehicleType {
    CAR = 100,
    BIKE = 50,
    TRUCK = 200
}

class Slot {
    #id: number;
    #type: VehicleType;
    #price_per_hour: PriceByVehicleType;

    constructor(id: number, type: VehicleType, price: PriceByVehicleType){
        this.#id = id;
        this.#type = type;
        this.#price_per_hour = price_per_hour;
        
    }
}

class PaymentType {
    CARD
    CASH
}

class Ticket {
    #id: number;
    #vehicleInfo: Vehicle;
    #startTime: Date
    #endTime: Date | null;
    #paid: boolean;
    #paymentType: PaymentType
    constructor(vehicle: Vehicle, id: number){
        this.#id = id;
        this.#vehicleInfo = vehicle;
        this.#startTime = Date.now();
        this.#endTime = null;
        this.#paid = false;
        this.#paymentType = null;
    }
}

class Person {
    #name: string;
    #phone_number: number
}

class ParkingLot {
    #slots: Slot[]
    #tickets: Ticket[]

    constructor({
        car,
        bike,
        truck
    }){
        this.#slots = [];
        this.#tickets = []
    }
    initialiseSolts(car, bike, truck){
        let slots: Slot[] = [];
        for(let i=0; i<car; i++){
            slots.push(new Slots)
        }
    }

}

const parkingLot = new ParkingLot({
    car: 10, bike: 20, truck: 19
})



