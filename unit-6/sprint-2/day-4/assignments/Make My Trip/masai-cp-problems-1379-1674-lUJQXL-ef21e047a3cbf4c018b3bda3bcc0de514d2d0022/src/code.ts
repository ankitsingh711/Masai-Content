export enum TripType {
    bus = "Trip with Buses",
    flight = "Trip with Plane",
    train = "Trip with Train"
}

export interface SeatType<T> {
    type: T;
    price: number;
    noOfSeats: number;
}

export abstract class Trip<T> {
    name: string;
    type: TripType;
    departureDate: Date;
    arrivalDate: Date;
    seats: T[];
    constructor(name: string, type: TripType, departureDate: Date, arrivalDate: Date, seats: T[]){
        this.name = name;
        this.type = type;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.seats = seats;
    }

    bookSeat(){

    }
}


export interface BusSeatTypes{
    
}
export class BusTrip extends Trip<BusTrip> {
    
}

export interface TrainSeatTypes {
}
export class TrainTrip {
}

export interface PlaneSeatType{

}
export class PlaneTrip  {
}
