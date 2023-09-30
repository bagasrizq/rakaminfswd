// promise
// Promise With Handler
let tabungan = 90;

const belanja = new Promise((resolve, reject) => {
    if (tabungan > 80) {
        resolve('bisa beli tamiya')
    }else {
        reject('duit ga cukup')
    }
}) 

belanja
    .then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
});



