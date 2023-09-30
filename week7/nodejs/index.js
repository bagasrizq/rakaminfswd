// Runtime
// console.log('Hello World!')

// Module
const fs = require('fs');
const filePath = 'D:\\Learning Skill\\Studi Independen\\Fullstack Web Development\\hyung.txt';
// const calc = require('./calc.js')

fs.readFile('D:\\Learning Skill\\Studi Independen\\Fullstack Web Development\\hyung.txt', 'utf-8', (err, data) => {
    if (err) { console.error(err) };
    console.log(data);
})

// console.log(calc.addition(10, 20));