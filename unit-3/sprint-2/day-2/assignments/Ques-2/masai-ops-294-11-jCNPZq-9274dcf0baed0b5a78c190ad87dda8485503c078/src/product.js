function Product(name,brand,price,des) {
  // Complete the constructor function
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = des;
  this.sold = false;
}

const p  = new Product("IPhone","Apple",100000,"This is an Iphone");
console.log(p);

Product.prototype.toggleStatus = function(){
  if(this.sold){
    this.sold = false;
  }else{
    this.sold = true;
  }
}

Product.prototype.changePrice = function(x){
  this.price = x;
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
