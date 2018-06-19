"use strict";

// While Loops Exercise -- Problem 2:

// var x = 2;
//
// while (x < 65536) {
//     console.log(x);
//     x = x * 2;
// }

// Problem 3

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;


do {
  console.log("Start of the day, I have " + allCones + " left");

    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if(conesToSell <= allCones) {
        console.log("I sold " + conesToSell);
        allCones = allCones - conesToSell;
    }else if (allCones - conesToSell === 0) {
        console.log("I can go home.");
    }
        else {
        console.log("I don\'t have " + conesToSell + "cones to sell");
    }

} while( allCones !== 0);





