"use strict";
$(function () {

// $('.invisible').css('display', 'none');
// $('dd').toggle('invisible').delay(1000).toggle('invisible');
//
// $('dt').click(function () {
//     $(this).css('background-color', 'yellow');
// })

$('#details').click(function () {
    event.preventDefault();
    $('dd').toggleClass('invisible');
});

$('dt').click(function () {
    $(this).toggleClass('highlighted');
});

})


