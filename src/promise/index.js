const prom = ()=>{
    return new Promise((resolve, reject) => {// Promise con mayuscula es una palabra reserved de javascript
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

const prom2 = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('true');
            },2000)
        }else{
            const error =new Error('whoop!');
            reject(error);
        }
    })
}


prom2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([prom(),prom2()])
    .then(response => console.log(response))
    .catch(err => console.error(err))