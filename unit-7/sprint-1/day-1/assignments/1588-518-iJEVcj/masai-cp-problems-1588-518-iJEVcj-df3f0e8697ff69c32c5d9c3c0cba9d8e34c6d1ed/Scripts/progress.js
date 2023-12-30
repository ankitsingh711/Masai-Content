// Write code for the Progress page here 

const inProgressData = JSON.parse(localStorage.getItem("priority-list"));

const showPriority = () => {
    const inProData = inProgressData.map((elem, index)=>{
        return `
        <tr>
            <td>${elem.name}</td>
            <td>${elem.description}</td>
            <td>${elem.startDate}</td>
            <td>${elem.endDate}</td>
            <td>${elem.priority}</td>
            <td class="add-to-done" onclick="addToDone(${index})">Add to Done</td>
        </tr>
        `
    })

    document.querySelector("tbody").innerHTML = inProData;
}
showPriority();

const doneData = JSON.parse(localStorage.getItem("done-list"))||[];

function addToDone(index){
    doneData.push(inProgressData[index]);
    localStorage.setItem("done-list", JSON.stringify(doneData));
    document.querySelector("tbody").innerHTML = null;
    inProgressData.splice(index, 1);
    localStorage.setItem("priority-list", JSON.stringify(inProgressData));
    alert("task added to done list")
}