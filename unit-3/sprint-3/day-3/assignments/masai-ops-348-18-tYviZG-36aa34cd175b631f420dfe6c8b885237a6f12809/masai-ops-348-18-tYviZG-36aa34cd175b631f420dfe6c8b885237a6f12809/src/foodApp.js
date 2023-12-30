const getCategoriesData = async () => {
  // code here
  try{
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
  let data = await res.json();
  console.log("Categories Data:"+" "+JSON.parse(data));
  }
  catch(err){
    err = "something wen wrong"
    return err;
  }
};

const getIngredientData = async () => {
  // code here
  try{
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
  let data = await res.json();
  console.log("Ingredients Data:"+" "+JSON.parse(data));
  }
  catch(err){
    err = "something went wrong"
    return err;
  }
};

window.onload = function () {
  //  get the buttons here and add click event
  let btn1 = document.querySelector("#get-category-data");
  btn1.addEventListener("click", getCategoriesData)
  let btn2 = document.querySelector("#get-ingredient-data");
  btn2.addEventListener("click", getIngredientData)
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
