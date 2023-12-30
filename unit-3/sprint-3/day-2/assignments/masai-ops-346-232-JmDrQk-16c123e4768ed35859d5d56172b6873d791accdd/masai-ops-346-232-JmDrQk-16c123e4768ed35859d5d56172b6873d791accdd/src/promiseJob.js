function job(delay, value) {
    const promise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res()
        }, delay)
    })

    return promise;
}



var results = job()
results
.then((data)=>{return data})
.catch((err)=>{return err})
export { job, results };
