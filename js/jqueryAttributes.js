"use strict";
$(function () {

    $('#btn-park').click(function () {
        $('ul').each(function () {
            $(this).children().last().toggleClass('btn-flop');
        })
    });

    $('h3').click(function () {
        $(this).next().children().css('font-weight', 'bold');
    });

    $('li').click(function () {
        $(this).parent().children().first().css('background-color', 'blue');
    });

$('span').click(function() {
    $('#Effects-div').hide();
});

$('#national-parks').hide();
$('#state-parks-texas').hide();
$('#national-parks-wildlife').hide();

$('#national-parks-heading').click(function () {
    $('#national-parks').slideToggle();
})
$('#state-parks-heading').click(function () {
    $('#state-parks-texas').slideToggle();
})
$('#wildlife-heading').click(function () {
    $('#national-parks-wildlife').slideToggle();
})
   // ------- more concise way of hiding h3s------
    // var h3s = $('.parks');
    // h3s.click(function () {
    //     $(this).next().fadeIn();
    // })

$('h2').hide().delay(8000).fadeIn(3000);












});












