function Listing(name, category, imageUrl, price) 
{
  this.name = name;
  this.category = category;
  this.imageUrl = imageUrl;
  this.price = price;
  this.sold = false;
}

function getFormData(e) 
{
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let cat = document.querySelector("#category").value;
  let img = document.querySelector("#image").value;
  let price = document.querySelector("#price").value;
  addListing(name,cat,img,price);
}

function addListing(name, category, image, price) 
{
  let list = JSON.parse(localStorage.getItem("Products"))||[];
  let items = new Listing(name,category,image,price);
  console.log(items)
  list.push(items);
  localStorage.setItem("Products", JSON.stringify(list));
}

window.onload = function (e) {
  //  get the form here and add submit event and handle the preventDefault
  let f = document.querySelector("#form");
  f.addEventListener("submit", getFormData);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
