export class Slots {
    #id: number;
    status: string;
    time: Date;
    game: string;
    constructor(id: number, status: string, time: Date, game: string){
        this.#id = id;
        this.status = status;
        this.time = time;
        this.game = game;
    }

    addUser = () => {
        if(this.#id, this.status, this.time, this.game){
            return "Slots is available"
        }
    }

    removeUser = () => {
        if( ! this.#id || this.time, this.status, this.game){
            return "Removed Users";
        }
    }
}