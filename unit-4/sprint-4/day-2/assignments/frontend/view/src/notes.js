window.onload = fetchData();

async function fetchData() {
  let tokens = localStorage.getItem("token");
  let res = fetch("https://kind-lime-chinchilla-kit.cyclic.app/notes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${tokens}`,
    },
  });
  let data = await (await res).json();
  displayData(data);
}

let main = document.querySelector(".main");
function displayData(data) {
  let notes = data.map((element) => {
    return `
    <div>
        <h3>Title:${element.title}</h3>
        <h3>Notes:${element.notes}</h2>
        <h4>Author:${element.author}</h4>
        <button>Edit</button>
        <button onclick = ${`deletenote(${element._id})`}>Delete</button></br></br>
        <span><------------------></span>
    </div>
    `;
  });
  main.innerHTML = notes.join("");
}

async function deletenote(id) {
  console.log("call")
  main.innerHTML = null;
  let res = await fetch(
    `https://kind-lime-chinchilla-kit.cyclic.app/notes/delete/:${id}`,
    {
      method: "DELETE"
    }
  );
  alert(`Deleted the id ${id}`);
  let data = await res.json();
  displayData(data);
}
