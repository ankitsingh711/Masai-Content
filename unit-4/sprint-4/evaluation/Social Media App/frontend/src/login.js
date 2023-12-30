const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  logIn(user);
});


async function logIn(user) {
  let res = await fetch(
    "https://outrageous-dungarees-bull.cyclic.app/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  let data = res.json();
  let token = data.token;
  if (res.ok) {
    localStorage.setItem("token", token);
    alert(`${user.email} LoggedIn Successfully`);
    window.location.href = "posts.html"
  }
}
