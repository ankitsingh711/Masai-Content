class Mobile {
    constructor(model, number, unlockpin){
        this.model = model;
        this.number = number;
    }

    getUnlockPin(){
        return this.unlockPin;
    }
    unlockPin(num){
        this.unlockPin = num;
    }
    sendSMS(msg){
        return msg;
    }
}
  
const first = new Mobile("oneplus","00889","2222");

export default Mobile
