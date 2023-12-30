function getData(data) {
    let promise = new Promise((res, rej)=>{
        if(isNaN(data))
        {
            rej("error")
        }else if(data%2===0){
            setTimeout(()=>{
                res("even")
            },4000)
        }else if(data%2!==0){
            setTimeout(()=>{
                res("odd")
            },3000)
        }
    })
    return promise;
}


getData()
.then((data)=>{return data})
.catch((err)=>{return err})
export default getData
