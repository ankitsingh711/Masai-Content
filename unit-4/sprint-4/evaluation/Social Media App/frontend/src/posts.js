async function fetchPost() {
  let res = await fetch(
    "https://outrageous-dungarees-bull.cyclic.app/posts/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization : localStorage.getItem("token")
      }
    }
  );
  let data = res.json();
  showpost(data)
}
fetchPost();

let main = document.querySelector(".main");
async function showpost(data){
    let alldata = data.map((elem)=>{
      return `
      <div>
        <h2>${elem.title}</h2>
        <p>${elem.body}</p>
        <h4>${elem.device}</h4>
        <button onclick=deletepost(${elem._id})>Delete</button>
        <button>Edit</button>
      </div>
      `
    });
    main.innerHTML = alldata.join("");
}

async function deletepost(id){
  let res = await fetch(`https://outrageous-dungarees-bull.cyclic.app/posts/delete/${id}`, {
    method:"DELETE"
  });
  if(res.ok){
    alert(`${id} Post Deleted`);
  }else{
    alert("Can't delete");
  }

  let data = res.json();
  showpost(data);
}
