// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
loginUserButton.addEventListener("click", (e)=>{
  e.preventDefault();
  let obj = {
    username : loginUserUsername.value,
    password: loginUserPassword.value
  };
  loginUser(obj);
})
let getTodoButton = document.getElementById("fetch-todos");
getTodoButton.addEventListener("click", ()=>{
  fetch_todo(userId);
})

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

let loginUser = async (obj) => {
  try {
    let response = await fetch(userLoginURL, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.ok)
    {
      let token = await response.json();
      let notification = document.querySelector("#notifications-wrapper");
      notification.innerHTML = `
      <h5 class="notification info">
          hey ${obj.username}, welcome back!
      </h5>
      `
      localStorage.setItem("localAccessToken", token.accessToken);
      localStorage.setItem("userId", token.user.id);
    }
  } catch (error) {
    console.log(error);
  }
}

let fetch_todo = async (userId) => {
  let res = await fetch(`${baseServerURL}/todos?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': "application/json",
      Authorization: `Bearer ${localStorage.getItem("userAuthToken")}`
    }
  })
  if(res.ok)
  {
    let data = await res.json();
    renderData(data);
  }
}

let renderData = (data) => {
  let arr = data.map((elem)=>{
    return ` 
    <div id="todo-list-wrapper" class="todo-list-wrapper">
      <label><input class="todo-item-checkbox" data-id=${elem.id} type="checkbox">${elem.title}</label>
    </div>
    `
  })
  mainSection.innerHTML= arr.join(" ");
  let todo_com = document.querySelectorAll(".todo-item-checkbox");
  let cas;
  for(let btn of todo_com)
  {
    btn.addEventListener("click", (e)=>{
      if(btn.checked){
        cas = true; 
      }else{
        cas = false;
      }
      patch_comp(e.target.dataset.id, cas)
    })
  }
}

let patch_comp = async (id,cas) => {
  try {
    let res = await fetch(urlTodosBase/id, {
      method: "PATCH",
      body: JSON.stringify({completed: cas}),
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${localStorage.getItem("userAuthToken")}`
      }
    })
    if(res.ok)
    {
      let data = await res.json();
      console.log(data)
    }
  } catch (error) {
    console.log(error);
  }
}