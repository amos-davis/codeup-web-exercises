
"use strict";

var codeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var keyArr = [];
var count = 0;
var vid = document.getElementById('#myVideo');



$(document).keyup(function(event){
    // console.log(event.keyCode);

    if (keyArr.length === (codeSequence.length - 1)) {
        alert('YOU HAVE CROSSED INTO THE FORBIDDEN ZONE!!!...BEWARE'),
        $('body').css('background-color', 'green');

        $('h1').html('....just kidding, Have a great day...');


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






