// Write code related to Done page here

const doneData = JSON.parse(localStorage.getItem("done-list"));

const showData = () => {
    const doneList = doneData.map((elem) =>{
        return `
        <tr>
            <td>${elem.name}</td>
            <td>${elem.description}</td>
            <td>${elem.startDate}</td>
            <td>${elem.endDate}</td>
            <td>${elem.priority}</td>
        </tr>
        `
    });

    document.querySelector("tbody").innerHTML = doneList;
}
showData();