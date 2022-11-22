// // increment +1
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// };     

// i++ means i = i + 1, if you +2 then you have to write like i = i + 2 NOT AS i ++++


// // increment +1
// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i);
// }; 

// // increment +2
// for (let i = 0; i < 10; i = i + 2) {
//     console.log(i);
// }; 

// // increment +3
// for (let i = 0; i < 10; i = i + 3) {
//     console.log(i);
// }; 

//  for (let i = 0; i <= 10; i++) {
//     console.log(i);
//  };


const myStates = [
    "Bihar",
     "UP", 
     "Delhi", 
     "Rajasthan", 
     "Assam", 
     1946,
     "Tamil Nadu", 
     "Maharastra"];

    //  for (let i = 0; i <= myStates.length; i++) {
    //     console.log(i);
    //  };

    // result - 0 1 2 3 4

    // for (let i = 0; i <= myStates.length; i++) {
    //     console.log(myStates[i]);
    //  };

    // result - Bihar
// UP        
// Delhi     
// Rajasthan 
// Assam
// 1946     
// Tamil Nadu
// Maharastra
// undefined 


// for (let i = 0; i < myStates.length; i++) {
//     console.log(myStates[i]);
//  };

//  result - Bihar
//  UP
//  Delhi
//  Rajasthan
//  Assam
// 1946
//  Tamil Nadu
//  Maharastra


// for (i = 0; i < myStates.length; i++) {
//     if(typeof myStates[i] !== 'string') continue;
//     console.log(myStates[i]);
// };

//  result - 
// Bihar
// UP        
// Delhi     
// Rajasthan 
// Assam     
// Tamil Nadu
// Maharastra


// for (i = 0; i < myStates.length; i++) {
//     if(typeof myStates[i] !== 'string') break;
//     console.log(myStates[i]);
// };

// result - 
// Bihar
// UP       
// Delhi    
// Rajasthan
// Assam  


for (i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] === 'string') continue;
    console.log(myStates[i]);
};

// result - 1946