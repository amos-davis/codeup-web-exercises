

$(document).ready(function() {
    "use strict";


    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function buildList (arrObjs) {
        var output = '';
        output += '<ul>';
        arrObjs.forEach(function(person) {
            output += "<li style='color:" + person.favColor + "'>" + person.name + "</li>";
        });
        output += "</ul>";
        return output;
    }


    $('#add-names-btn').click(function buildList() {
         $('#names-list').html(buildList(people));

    });
    // });
    // .css('color', 'people.favColor')

});




