function person (nama) {
    console.log ("Nama Saya" +nama) 
}

person(" Bagas")

function perkalian (nilai1, nilai2) {
    return nilai1 * nilai2;
}

hasil = perkalian (4,3);
console.log(hasil)

function perkalian_default (nilai1 = 10, nilai2 = 20) {
    return nilai1 - nilai2;
}
hasil = perkalian_default ()
console.log(hasil)


let hasil_arrow = (nilai1, nilai2) => nilai1 * nilai2
console.log(hasil_arrow(3,7));