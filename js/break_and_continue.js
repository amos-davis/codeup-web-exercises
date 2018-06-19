"use strict";
// var random = Math.floor((Math.random()*50)+1);
var input = prompt("Input and odd number between 1 and 50.");
    console.log("Random odd number to skip is: " + input);


for (var n = input; n < 60; n++) {
    if (n > 51 || n !== parseInt(n)) {
        console.log("That is not a valid input.");
        break;
    }
    if (n % 2 === 0) {
    continue;
    }

    if (input === (n % 2 === 1)) {
        console.log("Yikes! Skipping number: " + n);
    } else {
        console.log("Here is an odd number: " + n);
    }


}










