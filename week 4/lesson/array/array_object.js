// array dlm objek
const person = {name: "Bagasnala", age: 23, gender: "Male"}

// for in 
for (key in person) {
    console.log(person[key])
}

// // ERROR can't use for of (not iterable)

// for (val of person) {
//     console.log("for of" +val)
// }