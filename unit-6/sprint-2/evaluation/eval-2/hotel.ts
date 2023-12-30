// <--------- Hilton Hotel ----------->

// Also attached excali draw diagram for the hotel 
// Link : https://excalidraw.com/#json=jfuA9xQufquxH_a5DZY8m,eh5d7Q-Z5MIKL0EdlTgbkg


// <-------- Different type of hotel --------> 
enum Hoteltype {
    three_star = "3 Star",
    five_star = "5 Star",
    resort = "Resort"
}

// <-------- Different type of roles ----------> 
enum UserType {
    users,
    admin,
    super_admin
}


// <------------- Hotel Class -----------------> 
class Hotel {
    name: string
    location: string
    bookPrice: number
    type: Hoteltype
    constructor(name: string, location: string, bookPrice: number, type: Hoteltype){
        this.name = name;
        this.location = location;
        this.bookPrice = bookPrice;
        this.type = type;
    }
}

// <-------- Standard Type Hotel extending property -------->

class Standard extends Hotel {
    noOfBeds: number
    hasAC: boolean
    price: number
    constructor(noOfBeds:number, hasAC: boolean, price: number, name: string, location: string, bookPrice: number, type: Hoteltype){
        super(name, location, bookPrice, type)
        this.hasAC = true;
        this.noOfBeds = noOfBeds;
        this.price = price;
    }

    bookRoom(){
        if(this.price===this.bookPrice){
            return "Booked"
        }
        throw new Error("Booking Cancelled");
    }

    availableRoom(){
        if(this.noOfBeds>0){
            return "Available";
        }
        return 'Not Available';
    }
}

// <-------- Delux Type Hotel extending property -------->

class Delux extends Hotel {
    noOfBeds: number
    hasAC: boolean
    price: number
    constructor(noOfBeds:number, hasAC: boolean, price: number, name: string, location: string, bookPrice: number, type: Hoteltype){
        super(name, location, bookPrice, type)
        this.hasAC = true;
        this.noOfBeds = noOfBeds;
        this.price = price;
    }

    bookRoom(){
        if(this.price===this.bookPrice){
            return "Booked"
        }
        throw new Error("Booking Cancelled");
    }

    availableRoom(){
        if(this.noOfBeds>0){
            return "Available";
        }
        return 'Not Available';
    }
}

// <-------- Premium Type Hotel extending property -------->

class Premium extends Hotel {
    noOfBeds: number
    hasAC: boolean
    price: number
    constructor(noOfBeds:number, hasAC: boolean, price: number, name: string, location: string, bookPrice: number, type: Hoteltype){
        super(name, location, bookPrice, type)
        this.hasAC = true;
        this.noOfBeds = noOfBeds;
        this.price = price;
    }

    bookRoom(){
        if(this.price===this.bookPrice){
            return "Booked"
        }
        throw new Error("Booking Cancelled");
    }

    availableRoom(){
        if(this.noOfBeds>0){
            return "Available";
        }
        return 'Not Available';
    }
}

