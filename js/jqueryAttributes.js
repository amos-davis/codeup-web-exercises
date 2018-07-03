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
    })
});












