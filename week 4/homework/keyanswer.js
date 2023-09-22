// nilai random 100
let arr = []
    for (let index = 0; index < 100; index++) {
        arr.push(Math.round((Math.random() * 100)) + 1)
    }
console.log('100 nilai random')
console.log(arr)

// pecah menjadi 2 array
let arr_genap = []
let arr_ganjil = []
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 0) {
            arr_genap.push(arr[index])
        } else {
            arr_ganjil.push(arr[index])
        }
    }
console.log('array genap')
console.log(arr_genap)
console.log('array ganjil')
console.log(arr_ganjil)
       