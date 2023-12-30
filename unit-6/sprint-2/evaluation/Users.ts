export class User {
    user_id: number;
    name: string;
    email: string;
    password: string;
    constructor(user_id: number, name: string, email: string, password: string){
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    setName = (name: string) => {
        this.name = name;
    }

    getName = (name: string) => {
        return this.name;
    }
}
















