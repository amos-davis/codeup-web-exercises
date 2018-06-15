"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 // */
// var enteringNumberQuestion = confirm("Would you like to enter a number?");
// // function numberConfirm(enteringNumberQuestion) {
// var numbergiven = prompt("Enter your number.");
// if (enteringNumberQuestion) {
//         prompt("Enter your number.");
//     }
//
//         var evenResult = parseInt(numbergiven) % 2 == 0;
//         var oddResult = parseInt(numbergiven) % 2 == 1;
//         var numberAfterAddition = parseInt(numbergiven) + 100;
//
//     if (numbergiven === evenResult && numbergiven > 0) {
//         alert("This is an even number");
//         alert("Your number + 100 = " + numberAfterAddition);
//         alert("This is also a positive number.");
//     }
//     else if (numbergiven === oddResult) {
//         alert("This is an odd number!");
//         alert("That number + 100 = " + numberAfterAddition);
//         alert("This is clearly an Odd Number, man.");
//     }
//     else if (!isNaN === (numbergiven)) {
//         alert("Don't try to fool me, that is not a number.");
//     }
//

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(input) {
//     var blueColor = 'blue is the color of the sky';
//     var redColor = 'Strawberries are red';
//     var cyanColor = 'I don\'t know anything about cyan';
//     var notAselection = 'That is not one of the selected colors.'
//
//         if (input == 'blue') {
//             return blueColor;
//         } else if (input == 'red') {
//             return redColor;
//         } else if (input == 'cyan') {
//             return cyanColor;
//         } else {
//             return notAselection;
//         }
// }
//
// console.log(analyzeColor('purple'));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
*/

//         console.log(analyzeColor(randomColor));
//
// /* * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
// function analyzeColor(input) {
//     var blueColor = 'blue is the color of the sky';
//     var redColor = 'Strawberries are red';
//     var cyanColor = 'I don\'t know anything about cyan';
//     var notAselection = 'That is not one of the selected colors.'
//
//     switch (input) {
//         case 'blue':
//             return blueColor;
//             break;
//         case 'red':
//             return redColor;
//             break;
//         case 'cyan':
//             return cyanColor;
//             break;
//         default:
//             return notAselection;
//     }
// }
//
// console.log(analyzeColor('blue'));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(input = prompt("Please enter a color...")) {
//         alert("The color you have chosen is " + input + ".");
// }
//
// analyzeColor();

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmt) {
    var discountedPrice;


    if (luckyNumber === 0) {
        return discountedPrice = "No discount. Pay full amount: $" + (totalAmt);
    } else if (luckyNumber === 1) {
        return discountedPrice = totalAmt * (.90);
    } else if (luckyNumber === 2) {
        return discountedPrice = totalAmt * (.75);
    } else if (luckyNumber === 3) {
        return discountedPrice = totalAmt * (.65);
    } else if (luckyNumber === 4) {
        return discountedPrice = totalAmt * (.50);
    } else if (luckyNumber === 5) {
        return discountedPrice = 0 + " dollars. Your purchase is all free today!";
    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);

console.log(calculateTotal(luckyNumber, 100));