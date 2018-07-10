"use strict";

$.ajax({
    url: "data/blog.json",
    type: "get",
    data: {

    }
}).done(function (data) {
    console.log(data);
    data.forEach(function(objItem){
        var listItem = "<div>";
        listItem += "<h3>" + objItem.title + "</h3>";
        listItem += "</div>";
        listItem += "<p>(" + objItem.date + ")</p>";
        listItem += "<p><em>" + "Let'\s talk a little about " + objItem.categories + "..." + "</em></p>";
        listItem += "<div>" + objItem.picture + "</div>"
        // var listItem = '';
        // listItem += '<img class="greekGod" src="' + objItem.picture1 + '">';
        // listItem += '<img class="sweets" src="' + objItem.picture2 + '">';
        $('#posts').append(listItem);

    });


});

