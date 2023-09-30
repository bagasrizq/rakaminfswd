const suhu = 101;
 kondisi = '';

if(suhu >= -100 && suhu <= 0) {
kondisi ='Beku';
} else if (suhu >= 1 && suhu <= 100) {
kondisi ='Cair';
} else if (suhu >= 101 && suhu <= 500) {
kondisi = 'Uap';
} else { 
kondisi = undefined;
}

console.log(kondisi)
