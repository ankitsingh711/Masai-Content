function job(delay, value) {
    let promise = new Promise((res)=>{
        setTimeout(()=>{
            res();
        },delay)
    })
    return promise;
}

var results = job();
results
.then((data)=>{
    return data;
})
.catch((err)=>{return err});

export { job, results };
