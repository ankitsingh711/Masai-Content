import { User } from "./Users";

export class PlayStore  {
    #id : number;
    device: string;
    isAccess: boolean;

    constructor(id: number, device:string, isAccess: boolean){
        this.#id = id;
        this.device = device;
        this.isAccess = isAccess;
    }

    downloadAccess = () => {
        if(this.isAccess){
            return "Downloading" || 'Downloaded';
        }
        return "Downlaod Failed"
    }
}

enum Device {
    LAPTOP,
    MOBILE,
    TAB,
    PERSONAL_COMPUTER
}