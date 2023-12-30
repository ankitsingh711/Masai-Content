function getData(data) {
    let promise = new Promise((res, rej) => {
        if(data%2==0)
        {
            setTimeout(()=>{
                res("even")
            }, 4000);
        }
        else if(data%2==1)
        {
            setTimeout( ()=>{
                res("odd");
            }, 3000);
        }
        else if(isNaN(data))
        {
            rej("error");
        }
    })

    return promise;
}

let ans = getData(3)
.then((res)=> {return res})
.catch((rej)=> {return rej});
console.log(ans)

export default getData
