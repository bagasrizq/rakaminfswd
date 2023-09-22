
let jumlahPerulangan = 0;

for (let i = 0; i < 10; i++) {
    let nilai = Math.random();
    jumlahPerulangan++;

    // stop looping with break
    if (i == 10) {
        break
    }
    if (i == 5) {
        continue
    }

    console.log(jumlahPerulangan);
    console.log(nilai);
}

// console.log (Math.random());
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         break
//     }
//     console.log(i)
// }