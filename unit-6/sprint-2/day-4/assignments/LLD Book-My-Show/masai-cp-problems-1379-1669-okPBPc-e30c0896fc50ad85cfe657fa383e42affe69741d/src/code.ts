// export enum ShowType {
//     comedy = "Standup Comedy",
//     dance = "Dance Show",
//     singing = "Singing Show"
// }
// export class Show {
//     name: string;
//     type: ShowType;
//     constructor(name: string, type: ShowType) {
//         this.name = name;
//         this.type = type;
//     }
//     private book(): void {

//     }
// }

// type SeatType = {
//     seat: string;
//     availability: number,
//     price: number
// }
// export class DanceShow extends Show {
//     seats: SeatType[];
//     constructor(name: string){
//         this.seats = [];
//     }
//     addSeat(seat: SeatType){
//         this.seats.push(seat);
//     }
//     bookShow(seat: string, money: number){
//         let seatArr = this.seats;
//         for(let i=0; i<seatArr.length; i++){
//             if(seatArr[i].seat===seat){
//                 if(seatArr[i].availability>0 && money>=seatArr[i].price){
//                     seatArr[i].availability--;
//                 }
//             }
//         }
//     }
// }

// export class ComedyShow extends Show {
//     seats: SeatType[];
//     ticketPrice: number
//     constructor(name: string, seats: number, ticketPrice: number){
//         this.name = name;
//         this.seats = seats;
//         this.ticketPrice = ticketPrice;
//     }   
//     bookShow(money: number){
//         let seatArr = this.seats;
//         for(let i=0; i<seatArr.length; i++){
//             if(this.seats>0 && money>=seatArr[i].ticketPrice){
//                 seatArr[i].ticketPrice--;
//             }
//         }
//     }
// }

// export class SingingShow extends Show{
//      seats: SeatType[];
//     constructor(name: string, seats: SeatType[]){
        
//     }
//     bookShow(seat: string, money: number){
//         let seatArr = this.seats;
//         for(let i=0; i<seatArr.length; i++){
//             if(seatArr[i].seat===seat){
//                 if(seatArr[i].availability>0 && money>=seatArr[i].price){
//                     seatArr[i].availability--;
//                 }
//             }
//         }
//     }
// }