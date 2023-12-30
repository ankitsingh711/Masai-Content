//add your js code here

const tableRow = document.querySelector("tbody");
const baseURL = "https://jsonmock.hackerrank.com/api/football_matches";

let currentPage = 1;

const fetchData = async () => {
  try {
    let res = await fetch(`${baseURL}?page=${currentPage}`);
    let footballData = await res.json();
    showData(footballData.data);
  } catch (error) {
    console.log(error)
  }
};
fetchData();

const showData = (data) => {
  let footBall = data.map((elem) => {
    return `
        <tr>
            <td>${elem.competition}</td>
            <td>${elem.year}</td>
            <td>${elem.round}</td>
            <td>${elem.team1}</td>
            <td>${elem.team2}</td>
            <td>${elem.team1goals}</td>
            <td>${elem.team2goals}</td>
        </tr>
        `;
  });
  tableRow.innerHTML = footBall;
};

const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", ()=>{
  handlePagination(currentPage++);
});
const prevBtn = document.querySelector("#prev");
prevBtn.addEventListener("click", ()=>{
  handlePagination(currentPage--);
})


const handlePagination = async(pageNumber) =>{
  tableRow.innerHTML = null;
  let res = await fetch(`${baseURL}?page=${pageNumber}`);
  let data = await res.json();
  showData(data.data);
}



