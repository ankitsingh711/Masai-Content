import { PlaneTrip } from "./code";
  const trip = new PlaneTrip("p-1", new Date(2023, 6,12), new Date(2023, 6,14), [
      {
          noOfSeats: 2,
          type: "First-Class",
          price: 500,
      }
  ]);
  trip.bookSeat("First-Class");
  trip.bookSeat("First-Class");
  trip.bookSeat("First-Class");
  trip.bookSeat("First-Class");
  console.log(trip.seats.length);