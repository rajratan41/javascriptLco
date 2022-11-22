var nam = "Raj Ratan";

console.log("Line no. 3", nam);

function sayName() {
    var nam = "Mr. Raj";
    console.log("Line no. 7", nam);

    sayNameTwo()

    function sayNameTwo() {
        var nam = "Mr. R"
        console.log("Line no. 12", nam)
    }
}

sayName();