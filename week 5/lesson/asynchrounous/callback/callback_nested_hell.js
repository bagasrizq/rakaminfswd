// call back nested hell
const startPlayGame = (nama, callback) => {
    console.log('start game'+nama+' sekarang')
    callback()
}
let nama1 = 'GTA'
let nama2 = 'Point Blank'
let nama3 = 'Call Duty'

startPlayGame(nama1, function(){
    startPlayGame(nama2, function(){
        startPlayGame(nama3, function(){
            console.log('Udahan')
        })
    })
})