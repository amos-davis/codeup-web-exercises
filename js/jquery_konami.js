
"use strict";

var codeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var keyArr = [];
var count = 0;


$(document).keyup(function(event){
    // console.log(event.keyCode);

    if (keyArr.length === (codeSequence.length - 1)) {
        alert('You have added 30 lives!');
        $(codeSequence).css('background-color', 'green');
    } else {

        if (event.keyCode === codeSequence[count]) {
            keyArr.push(event.keyCode);
            count++
        } else {
            keyArr = [];
            count = 0;
        }
    }
});



// if (event.keyCode === codeSequence) {
//     alert('You have added 30 lives!');


