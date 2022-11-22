//fill

var testArray = [2, 4, 6, 3, 5, 7, 9, 8];

// console.log(testArray.fill(0));
// console.log(testArray.fill("Raj", 2));
// console.log(testArray.fill("Raj", 3, 7));
// console.log(testArray.fill("empty"));

//filter

const myNumber = [25, 23, 65, 54, 67, 45, 48, 87];

// const result = myNumber.filter((num) => num != 54);
// const result = myNumber.filter((num) => num < 55);
const result = myNumber.filter((num) => num > 55);
console.log(result);