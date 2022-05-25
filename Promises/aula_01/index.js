//JS Assíncrono

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(()=> {
        resolve("Resolvida");
    }, 3000)
})

 const promise =  myPromise 
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou')
    .catch((err) => console.log(err.message));

    console.log(promise);