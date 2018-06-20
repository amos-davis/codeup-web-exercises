"use strict";

// For Loops: Number 2

// function showMultiplicatonTable(number) {
//     for (var table = 1; table <= 10; table++) {
//             console.log(number + " x " + table + " = " + (number * table));
//         }
//     }
// showMultiplicatonTable(7);

// For Loops: Number 3


for (var i = 1; i <= 10; i++)  {
    var randomNum = Math.floor(Math.random() * 180) + 20;
    if (randomNum % 2 === 1) {
        console.log( randomNum + " is odd.");
    } else {
        console.log( randomNum + " is even.");
    }
}





// For Loops: Number 4

// for (var i = 1; i < 10; i++) {
//     var d = i.toString();
//     console.log(d.repeat(i));
// }




// For Loops: Number 5

// for (var x = 100; x >= 5; x = x - 5) {
//     console.log(x);
// }
