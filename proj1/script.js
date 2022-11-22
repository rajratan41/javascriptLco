// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// let count = 1;

// setInterval (() => {
//     if (count < 1000) {
//         count ++;
//         counter.innerText = count;
//     }
// },1)


// setTimeout (() => {
//     followers.innerText = "Followers on Instagram!"
// },4000)



// Assignment

var counter = document.getElementsByClassName("counter");
var counter = document.getElementsByClassName("followers");

let count = 1;

setInterval (() => {
    if (count < 1000) {
        count ++;
        document.getElementsByClassName("counter") [0].innerText = count;
    }
},1)


setTimeout (() => {
    document.getElementsByClassName("followers") [0].innerText = "Followers on Instagram!"
},4000)