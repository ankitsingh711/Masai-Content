import { User } from "./Users";

export class Books {
    authorName: string;
    published: Date;
    rating: number;
    bookName: string;
    constructor(authorName: string, published: Date, rating: number, bookName: string){
        this.authorName = authorName;
        this.published = published;
        this.rating = rating;
        this.bookName = bookName;
    }

    readBook = () => {
        return this.bookName + " " + this.authorName;
    }
}