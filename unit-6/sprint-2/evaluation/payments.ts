import { User } from "./Users";

enum PaymentMethods {
    CREDIT_CARD,
    DEBIT_CARD,
    UPI,
    NET_BANKING
}

export class Payment {
   name: string;
   card_number: number;
   cvv: number;
   address: string;
   constructor(name: string, cvv: number, card_number: number, address: string){
    this.name = name;
    this.cvv = cvv;
    this.card_number = card_number;
    this.address
     = address;
   }


    paymentSuccess = () => {
        if(this.name, this.card_number, this.cvv, this.address ){
            return "payment successfull";
        }
        return "payment failed";
    }
}