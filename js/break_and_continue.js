"use strict";
// var random = Math.floor((Math.random()*50)+1);

while (true) {
    var input = prompt("Input and odd number between 1 and 50.");

    if (input <= 50 && input % 2 !== 0 && input >= 1) {
        break;
    }
}


console.log("We are skipping your number of: " + input);


for (var i = 1; i < 51; i++) {

    if (i % 2 == 0) {
        continue;
    }
      if (i == input)  {
        console.log("Yikes! Skipping number: " + input);
    } else {
        console.log("This is an odd number: " + i);
      }
}










