// var returnValue = Math.max(2, 5, 8, 4, 7, 3, 9);
// console.log(returnValue);


// var myObj = {};

// Object.assign(myObj, { a:1, b:2, c:3 }, { z:9, y:8, x:7 });
// console.log(myObj);


// spread operator

// function sumOne (a,b) {
//     return a + b;
// }

// var myA = [5, 3];

// console.log(sumOne(...myA));    // SPREAD OPERATOR


// Rest Operator

// function sumTwo (...args) {
//     let sum = 0;
//     for (const arg of args)  {
//         sum = sum + arg;
//     }
//     return sum;
// }

// console.log(sumTwo(2, 3, 5, 8));


// First multiply two nos, then add all

function multiSum (a, b, ...args) {
    console.log(args);
    
    let multiply = a * b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }

    return [multiply, sum];
}

console.log(multiSum(2, 3, 5, 4, 1));