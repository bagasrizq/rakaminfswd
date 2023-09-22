let suhuAir = 50;

let kondisi = suhuAir >= -100 && suhuAir <=0 ? "beku" : suhuAir >= 1 && suhuAir <= 100 ? "Cair" : suhuAir >= 101 && suhuAir <= 500 ? "Uap" : "Undifined" ;

console.log (kondisi);