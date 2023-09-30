// promise => callback
const startPlayGame = (nama) => {
    return new Promise((resolve, reject) => {
        resolve('start game '+nama+' sekarang')
    })  
}

let nama1 = 'GTA'
let nama2 = 'Point Blank'
let nama3 = 'Call Duty'

Promise.all ([startPlayGame(nama1),startPlayGame(nama2),startPlayGame(nama3)]).then((result) => {
    for(let game of result) {
        console.log(game)
    }
    console.log('udahan')
})