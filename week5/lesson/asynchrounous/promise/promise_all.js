// Promise All
const kuliahMaba = new Promise((resolve, reject) => {
    resolve('0%')
})
const kuliahSatu = new Promise((resolve, reject) => {
    resolve('25%')
})
const kuliahDua = new Promise((resolve, reject) => {
    resolve('50%')
})
const kuliahTiga = new Promise((resolve, reject) => {
    resolve('75%')
})
const kuliahEmpat = new Promise((resolve, reject) => {
    resolve('100%')
})

Promise.all([kuliahMaba,kuliahSatu,kuliahDua,kuliahTiga,kuliahEmpat]).then((result) => {
    console.log(result);
})

let status = 0;
const belajar = new Promise((resolve, reject) => {
    status += 30
    resolve(status)
})

belajar.then ((result) => {
    console.log('status sudah'+result+' %')
    return result + 30
}).then ((result) => {
    console.log('status sudah'+result+' %')
    return result + 30
}).then ((result) => {
    console.log('status sudah'+result+' %')
    return result + 30
}).then ((result) => {
    if (result >= 100)
    console.log('Wisudah')
})