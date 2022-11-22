// + - / * %

var num1 = 7;
var num2 = 6;

console.log(num1 + num2);
console.log(num1 * num2);

var answer = num1 < num2;
console.log(answer);



//Use case scenerio of operators

//write a program to find discount percentage

var sellingPrice = 199;
var listingPrice = 799;
// discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100
var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discount Percent is : " + discountPercent);

var displayDiscountedPrice = Math.round(discountPercent);
console.log(displayDiscountedPrice + "% off");


