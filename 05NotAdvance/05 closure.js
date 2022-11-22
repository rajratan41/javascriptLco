// function init () {
//     var firstName = "Raj";

//     console.log("I am Init");

//     function sayFirstName () {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();

// value();


function doAddition (x) {
    return function (y) {
        return x + y;
    };
}

var add = doAddition(4);
console.log((add(5)));

console.log(doAddition(5)(10));

doAddition()()() // Curring