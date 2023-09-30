// array
const cars = ["Volvo", "BMW", "JDM", "Ford GT"]

// for in
for (key in cars) {
    console.log("for in" + key)
    console.log("for in" + cars[key])
}

// for of
for (val of cars) {
    console.log("for of"+val)
}
