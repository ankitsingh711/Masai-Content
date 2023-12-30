
const getUsersData = async () => {
  let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users";
  try {
   let res = await fetch(url);
   let datas = await res.json();
   return datas;
  } catch (err) {
    console.log(err);
  }
};
getUsersData()
.then((data)=>{
  splitData(data.data, data.totalPages);
})
.catch((err)=>{console.log(err)});

function splitData(...rest) {
  let [data, tp] = rest;
  let d1 = data[0];
  let d2 = data[1];
  let temp=[];
  for(let i=2; i<data.length; i++){
    temp.push(data[i]);
  }
  return {
    totalPages:tp,
    data1:d1,
    data2: d2,
    data3:temp
}
}
// console.log(splitData())


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
