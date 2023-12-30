// <-------- Theatres able to register to the website / app -------> 

class Theatres {
    name: string;
    location: string;
    number_of_hall: number;

    constructor(name: string, location: string, number_of_hall:number, movieName: string){
        this.name = name;
        this.location = location;
        this.number_of_hall = number_of_hall; 
    }

    registerTheatre = () => {
        const name = this.name;
        const number_of_hall = this.number_of_hall;
        const location = this.location;

        return `Theatre ${name} has been registered at location ${location}`
    }

}


// <-------- User should able to book tickets -------> 

class Slots {
    name: string;
    number_of_seats: number;
    premium: string;
    timing: Date;
    movieName: string;

    constructor(name: string, number_of_seats: number, premium: string, timing: Date, movieName: string){
        this.name = name;
        this.number_of_seats = number_of_seats;
        this.premium = premium,
        this.timing = timing;
        this.movieName = movieName;
    }

    bookTicket = () => {
        const name = this.name;
        const number_of_seats = this.number_of_seats;
        const premium = this.premium = this.premium;
        const timing = this.timing;
        const movieName = this.movieName;

        return `Your movie ${movieName} ${number_of_seats} ticket has been booked and premium ${premium} at timing ${timing}`;
    }


}

// <------ User should able to rate the movie after watching --------> 

class Rating {
    nameOfMovie: string;
    rating: number;

    constructor(nameOfMovie: string, rating: number){
        this.nameOfMovie = nameOfMovie;
        this.rating = rating;
    }

    shouldrate = () => {
        return `I have rated this movie ${this.nameOfMovie} as ${this.rating}`;
    }
}