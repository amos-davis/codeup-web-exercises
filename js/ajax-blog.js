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
        listItem += "<p><em>" + "Let'\s talk a little about " + objItem.categories + "..." + "</em></em></p>";

        $('.title-post1').append(listItem);
    });

    $(function (data) {

    });
});
