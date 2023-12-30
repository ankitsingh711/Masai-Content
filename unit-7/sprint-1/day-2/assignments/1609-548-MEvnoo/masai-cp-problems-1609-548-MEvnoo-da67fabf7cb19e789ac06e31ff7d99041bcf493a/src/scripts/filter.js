//add your js code here

const tableRow = document.querySelector("tbody");
const baseURL = "https://jsonmock.hackerrank.com/api/football_matches";

const fetchData = async () => {
  let res = await fetch(baseURL);
  let footballData = await res.json();
  showData(footballData.data);
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

const filterYearBtn = document.querySelector("#year");
const filterTeam1Btn = document.querySelector("#team1");
const filterTeam2Btn = document.querySelector("#team2");

filterYearBtn.addEventListener("change", async ()=>{
  tableRow.innerHTML = null;
  let res = await fetch(`${baseURL}?year=${filterYearBtn.value}`);
  let filteredData = await res.json();
  
  let footBall = filteredData.data.map((elem) => {
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
  
})

filterTeam1Btn.addEventListener("change", async ()=>{
  tableRow.innerHTML = null;
  let res = await fetch(`${baseURL}?year=${filterYearBtn.value}&team1=${filterTeam1Btn.value}`);
  let filteredData = await res.json();
  
  let footBall = filteredData.data.map((elem) => {
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
  
})

filterTeam2Btn.addEventListener("change", async ()=>{
  tableRow.innerHTML = null;
  let res = await fetch(`${baseURL}?year=${filterYearBtn.value}&team1=${filterTeam1Btn.value}&&team2=${filterTeam2Btn.value}`);
  
  let filteredData = await res.json();
  
  let footBall = filteredData.data.map((elem) => {
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
  
})

