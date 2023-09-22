
// Contoh inputan
// const platKendaraan = "kuning"; // Ganti dengan "kuning" atau "biru" sesuai plat kendaraan
// const jenisKendaraan = "mobil"; // Ganti dengan "mobil" atau "motor" sesuai jenis kendaraan
// const ccMobil = 1700; // Ganti dengan kapasitas mesin mobil yang sesuai

// Logika SPBU dalam JavaScript
// if (platKendaraan === "kuning" || jenisKendaraan === "motor") {
//   console.log("BBM subsidi");
// } else if (ccMobil < 1500) {
//   console.log("Pertamax");
// } else if (ccMobil >= 1500) {
//   console.log("Pertamax Turbo");
// } else {
//   console.log("Tidak ada pilihan bahan bakar yang sesuai.");
// }

// console.log(ccMobil)





// let jenisKendaraan = 'Motor';

// if (jenisKendaraan === 'Plat Kuning' || jenisKendaraan === 'Motor') {
//   console.log('BBM Subsidi'); 
// } else {
//   console.log('Pertamax');
// }

// console.log(jenisKendaraan)


// const ccKendaraan = 1501;
// let BBM = '';

// if (ccKendaraan < 1500) {
//   BBM = 'Pertamax';
// } else {
//   console.log('Pertamax Turbo');
// }

// console.log(BBM)

// let jenisPlat = 'Plat Putih';
// const jenisKendaraan = '';
// const ccMobil = '';

// BBM = '';

// if (jenisPlat === 'Plat Kuning' || jenisKendaraan === 'Motor') {
//   BBM = 'Subsidi';
// } else if (ccMobil < 1500) {
//   BBM = 'Pertamax';
// } else {
//   BBM = 'Pertamax Turbo';
// } 

// console.log(BBM);


const jenisKendaraan = '';
const ccKendaraan = 1500;

let BBM = '';

if (jenisKendaraan === 'Plat Kuning' || jenisKendaraan === 'Motor') {
  BBM = 'Subsidi';
} else if (ccKendaraan < 1500) {
  BBM = 'Pertamax';
} else if (ccKendaraan >= 1500) {
  BBM = 'Pertamax Turbo';
}
console.log(BBM);
