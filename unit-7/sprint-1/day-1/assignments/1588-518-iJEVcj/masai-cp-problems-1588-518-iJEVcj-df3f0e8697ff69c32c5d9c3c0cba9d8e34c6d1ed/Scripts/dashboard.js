// Write code related to dashboard page here

const taskData = JSON.parse(localStorage.getItem("task-list"));
const filterBtn = document.querySelector("#filter");
// filterBtn.addEventListener("change", filterData);

const displayData = () => {
  let totalTask = taskData.length;
  document.querySelector("#task-count").innerHTML = totalTask;
  const showData = taskData.map((elem, index) => {
    return `
        <tr>
            <td>${elem.name}</td>
            <td>${elem.description}</td>
            <td>${elem.startDate}</td>
            <td>${elem.endDate}</td>
            <td>${elem.priority}</td>
            <td class="add-btn" onclick="addToProgress(${index})">Add to Progress</td>
        </tr>
        `;
  });
  document.querySelector("tbody").innerHTML = showData;
};
displayData();

const priorityTask = JSON.parse(localStorage.getItem("priority-list"))||[];

function addToProgress(index) {
  priorityTask.push(taskData[index]);
  localStorage.setItem("priority-list", JSON.stringify(priorityTask));
  document.querySelector("tbody").innerHTML = null;
  taskData.splice(index, 1);
  localStorage.setItem("task-list", JSON.stringify(taskData));
  displayData();
  alert("task added to the progress");
}


