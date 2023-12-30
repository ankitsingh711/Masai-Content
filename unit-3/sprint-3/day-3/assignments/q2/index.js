let url = "https://jsonplaceholder.typicode.com/posts";

async function getData()
{
  let res = await fetch(url);
  let data = await res.json();
  display(data)
}
getData();


let main = document.querySelector("#main>ol");
function display(data)
{
  let sortedData = data.sort((a,b)=>{
    return a.title[0] - b.title[0];
  }) 

  sortedData.forEach((elem)=>{
    let li = document.createElement("li");
    li.innerText = elem.title;
    main.append(li);
  })
  console.log(sortedData)
}