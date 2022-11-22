// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     }
//     return false;
// };

// console.log(isEven(8));

// another way to write same program

// function isEven(element) {
//     return element % 2 === 0;
// };
// console.log(isEven(16));



//using arrow function

// var isEven = (element) => {

//     return element % 2 === 0;
// };

//console.log(isEven(4));

// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);

// var result = [2, 3, 6, 8].every(isEven);
// console.log(result);

var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result);