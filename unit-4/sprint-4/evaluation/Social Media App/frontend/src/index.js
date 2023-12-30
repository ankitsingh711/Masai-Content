const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    gender: document.querySelector("#gender").value,
    password: document.querySelector("#password").value,
  };

  signUp(user);
});

async function signUp(user) {
  let res = await fetch(
    "https://outrageous-dungarees-bull.cyclic.app/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  if (res.ok) {
    alert(`${user.name} registered Successfully`);
    window.location.href = "login.html";
  }
}
