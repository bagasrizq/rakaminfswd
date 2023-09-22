// async await
const startRace = (type) => {
    return new Promise((resolve, reject) => {
        resolve(type)
    })  
}

let type1 = 'Ferarri'
let type2 = 'Bugatti'
let type3 = 'Mercy'

Promise.all ([startRace(type1),startRace(type2),startRace(type3)]).then((result) => {
    for(let race of result) {
        console.log(race)
    }
    console.log('Finish')
})