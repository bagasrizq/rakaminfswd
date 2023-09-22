var arrayRandom = [];

for (var i = 0; i < 100; i++){
    var arr = Math.floor(Math.random() *50) +1
    arrayRandom.push(arr);
}

console.log(arrayRandom);

var arrayGanjil = [];
var arrayGenap = [];

for (var i = 0;i < arrayRandom.length; i++) {
    if (arrayRandom[i] % 2 === 0) {
        arrayGenap.push(arrayRandom[i]);
    } else {
        arrayGanjil.push(arrayRandom[i]);
    }
}

console.log('ini array GANJIL', arrayGanjil);
console.log('ini array GENAP', arrayGenap);


// MIN Array Ganjil Genap
var minArrayGanjil = Math.min(...arrayGanjil);
var minArrayGenap = Math.min(...arrayGenap);
console.log('min array GANJIL', minArrayGanjil);
console.log('min array GENAP', minArrayGenap);

// Membandingkan nilai minimum dari array ganjil dan genap
if (minArrayGanjil > minArrayGenap) {
    console.log('min array GANJIL > min array GENAP');
} else if (minArrayGanjil < minArrayGenap) {
    console.log('min array GENAP > min array GANJIL');
} else {
    console.log('min array GANJIL = min array GENAP');
}

// MAX Array Ganjil Genap
var maxArrayGanjil = Math.max(...arrayGanjil);
var maxArrayGenap = Math.max(...arrayGenap);
console.log('max array GANJIL', maxArrayGanjil);
console.log('max array GENAP', maxArrayGenap);
// PERBANDINGAN MAX array Ganjil Genap
if (maxArrayGanjil > maxArrayGenap) {
    console.log('max array GANJIL > max array GENAP');
} else if (maxArrayGanjil < maxArrayGenap) {
    console.log('max array GENAP > max array GANJIL');
} else {
    console.log('max array GANJIL = max array GENAP');
}

// // TOTAL Array Ganjil Genap
var totalArrayGanjil = arrayGanjil.reduce((acc, curr) =>acc + curr, 0); 
var totalArrayGenap = arrayGenap.reduce((acc, curr) =>acc + curr, 0); 

console.log('total array GANJIL',totalArrayGanjil);
console.log('total array GENAP',totalArrayGenap);

// PERBANDINGAN TOTAL array Ganjil Genap
if (totalArrayGanjil > totalArrayGenap) {
    console.log('total array GANJIL > total array GENAP');
} else if (totalArrayGanjil < totalArrayGenap) {
    console.log('total array GENAP > total array GANJIL');
} else {
    console.log('total array GANJIL = total array GENAP');
}


// Length Array Ganjil Genap
var lengthArrayGanjil = arrayGanjil.length;
var lengthArrayGenap = arrayGenap.length;


console.log('length GANJIL', lengthArrayGanjil);
console.log('length GENAP', lengthArrayGenap);

// AVERAGE Array Ganjil Genap
var avarageArrayGanjil = totalArrayGanjil / arrayGanjil.length;
var averageArrayGenap = totalArrayGenap / arrayGenap.length;

console.log('average array GANJIL',avarageArrayGanjil);
console.log('average array GENAP',averageArrayGenap);

console.log("Version Control System")
