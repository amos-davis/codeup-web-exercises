(function() {
    "use strict";
    // TODO: Create an ajax GET request for /data/inventory.json
    var autoRecall = function() {
        $.ajax({
            url: "data/inventory.json",
            type: "get",
            data: {

            }
        }).done(function(data, status, jqXhr) {
            console.log(data);
            data.forEach(function(item){
                var listItem = "<tr>";
                listItem += "<td>" + item.title + '</td>';
                listItem += '<td>' + item.quantity + '</td>';
                listItem += '<td>' + item.price + '</td>';
                listItem += '<td>' + item.categories + '</td>';
                listItem += '</tr>';
                $('#insertProducts').append(listItem);
            });
            // TODO: Take the data from inventory.json and append it to the products table
            //       HINT: Your data should come back as a JSON object; use console.log() to inspect
            //             its contents and fields
            //       HINT: You will want to target #insertProducts for your new HTML elements

        });
    };
    $('#auto-refresh').click(function () {
        autoRecall();
});



});












