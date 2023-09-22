//conditional
const nilai = 71;
 keterangan = '';

if (nilai >= 60 && nilai <= 69) {
    keterangan = 'cukup'
} else if(nilai >= 70 && nilai <=79) {
    keterangan = 'Bagus'
} else if (nilai >=80 && nilai <=89){
    keterangan = 'Perfect'
} else {
    keterangan = undefined
}

console.log(keterangan)