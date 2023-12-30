class Book {
    name: string;
    authorName: string;
    year: number;
    price: number

    constructor(name: string, authorName: string, year: number, price: number){
        this.name = name;
        this.authorName = authorName;
        this.year = year;
        this.price = price;
    }
}

class Invoice {
    book: Book;
    quantity: number;
	discountRate: number;
	taxRate: number;
	total: number;  

    constructor( book: Book, quantity: number, discountRate: number, taxRate: number) {
		this.book = book;
		this.quantity = quantity;
		this.discountRate = discountRate;
		this.taxRate = taxRate;
		this.total = this.calculateTotal();
	};

    calculateTotal = () => {
    let price = ((this.book.price - this.book.price * this.discountRate) * this.quantity);

    let priceWithTaxes = price * (1 + this.taxRate);

    return priceWithTaxes;
}
}
