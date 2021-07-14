const prom = ()=>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hello');
        }else{
            reject ('whopps!');
        }
    });
};

prom()
    .then(response => console.log(response))
    .catch(err => console.log(err));