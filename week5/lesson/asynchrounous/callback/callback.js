// callback 
// call back simple
const notify = () => {
    console.log('sudah selesai')
}
const startPlayGame = (nama, callback) => {
    console.log('start game '+nama+' sekarang')
    callback()
}

let nama = 'taken'
startPlayGame(nama, notify)
