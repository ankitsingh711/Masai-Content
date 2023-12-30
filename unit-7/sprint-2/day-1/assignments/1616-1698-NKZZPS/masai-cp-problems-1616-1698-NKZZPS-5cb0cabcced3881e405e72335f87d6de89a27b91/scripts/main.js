// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

window.addEventListener("load", ()=>{
  fetchBooks();
})

const fetchBooks = async() => {
  let res = await fetch(`${bookURL}`);
  let bookData = await res.json();
  booksData = bookData;
  showAllBooks(bookData);
  return bookData;
}



const showAllBooks = (data) => {
  mainSection.innerHTML = null;
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "card-list");
  const allBooks = data.map((elem)=>{
    return `
      <div class="card" data-id=${elem.id}>
        <div class="card-img">
          <img src=${elem.image} alt="book" width="100%"/>
        </div>
        <div class="card-body">
          <h4 class="card-title">Title: ${elem.title}</h4>
          <p class="card-author">Author: ${elem.author}</p>
          <p class="card-category">Category: ${elem.category}</div>
          <p classs="card-price">Price: ${elem.price}</p>
          <a href="#" data-id=${elem.id} class="card-link">Edit</a>
          <button data-id="${elem.id}" class="card-button">DELETE</button>
        </div>
      </div>
    `
  });
  mainDiv.innerHTML = allBooks;
  mainSection.append(mainDiv);

  async function deleteBook (id) {
    let res = await fetch(`${bookURL}/${id}`, {
      method: "DELETE"
    });
    if(res.ok){
      alert("Book Deleted")
    }
    showAllBooks();
  }
}

bookCreateBtn.addEventListener("click", ()=>{
  let booksData = {
    title: bookTitleInput.value,
    image:bookImageInput.value,
    category:bookCategoryInput.value,
    author:bookAuthorInput.value,
    price: bookPriceInput.value
  };
  postBooks(booksData)
})

const postBooks = async(data) => {
  mainSection.innerHTML = null;
  data = JSON.stringify(data);

  let res = await fetch(`${bookURL}`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let addedData = await res.json();
  console.log(addedData)
  if(res.ok){
    alert("Books Added Succesfully");
  }
  showAllBooks(booksData);

}


sortAtoZBtn.addEventListener("click", ()=>{
  sortLowToHigh();
})

sortZtoABtn.addEventListener("click", ()=>{
  sortHighToLow();
})

let sortLowToHigh = async () => {
  let res = await fetch(`${bookURL}?_sort=price&_order=asc`);
  res = await res.json();
  showAllBooks(res);
};

let sortHighToLow = async () => {
  let res = await fetch(`${bookURL}?_sort=price&_order=desc`);
  res = await res.json();
  showAllBooks(res);
};

filterClassic.addEventListener("click", ()=>{
  classicSort();
});

filterFantasy.addEventListener("click", ()=>{
  fantasyFilter()
})

filterMystery.addEventListener("click", ()=>{
  mysteryFilter();
})

const classicSort = async() => {
  let res = await fetch(`${bookURL}`);
  res = await res.json();
  const filterData = res.filter((elem)=>{
    return elem.category === "classic"
  })
  showAllBooks(filterData);
}

const fantasyFilter = async() => {
  let res = await fetch(`${bookURL}`);
  res = await res.json();
  const filterData = res.filter((elem)=>{
    return elem.category === "fantasy"
  })
  showAllBooks(filterData);
}

const mysteryFilter = async() => {
  let res = await fetch(`${bookURL}?_category="mystery"`);
  res = await res.json();
  const filterData = res.filter((elem)=>{
    return elem.category === "mystery"
  })
  showAllBooks(filterData);
}

searchBySelect.addEventListener("chnage", ()=>{
  if(searchBySelect.value==="Title"){
    searchByButton.addEventListener("click", ()=>{
      filterByTitle();
    })
  }else if(searchBySelect.value==="Author"){
    searchByButton.addEventListener("click", ()=>{
      filterByAuthor();
    })
  }
})

function filterByTitle(){
  const data = fetchBooks();
  const filterData = data.filter((elem)=>{
    return elem.title.includes(searchByInput.value);
  });
  showAllBooks(filterData);
}

function filterByAuthor(){
  const data = fetchBooks();
  const filterData = data.filter((elem)=>{
    return elem.title.includes(searchByInput.value);
  });
  showAllBooks(filterData);
}




