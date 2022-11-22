var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "cuatro");

// console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`key is ${key}`);
// }

// for (let value of myMap.values()) {
//     console.log(`value is ${value}`);
// }

// for of will give you key first

// for (let [key, value] of myMap) {
//     console.log(`key is ${key} value is ${value}`);
// }

// forEach always give you value first

// myMap.forEach((value, key) => console.log(`value is ${value} and key is : ${key}`));

myMap.delete(2)
console.log(myMap);