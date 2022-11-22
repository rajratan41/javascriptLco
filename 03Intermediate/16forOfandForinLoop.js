const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

// for of loop - mainly used for array

// for (const n of names) {
//     console.log(n);
// }


// for in loop - mainly used for objects

const symbols = {
    yt: "Youtube",
    lg: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline",
};

// for (const n in symbols) {
//     console.log(n);
// }

// result - 
// yt
// lg
// fb
// lco


// for (const n in symbols) {
//     console.log(symbols[n]);
// }

// result - 
// Youtube
// Instagram
// Facebook
// LearnCodeOnline

for (const n in symbols) {
    console.log(`key is: ${n} and value is ${symbols[n]}` );
}