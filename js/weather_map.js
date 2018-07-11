$(document).ready(function() {
    "use strict";



    $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "794062c0afb12fc00e58b7aed4db7354",
            lat: 29.9499,
            lon: -90.0702,
            q: "New Orleans, US",
            units: "imperial"

        }).done(function(data) {
            console.log(data.list[0].main.temp_max);


                for (var i = 0; i < data.list.length - 20; i++) {
                        var forecast = {
                            Clouds: data.list[i].weather[0].description + '\n',
                            // Rain: data.list[i].
                            Humidity: data.list[i].main.humidity + '\n',
                            Wind: Math.round(data.list[i].wind.speed) + '\n',
                            Pressure: data.list[i].main.pressure
                        };
                    if (i === 0) {
                        $('#left-box').append(forecast);
                    } else if (i === 8) {
                        console.log(forecast);
                    } else if (i === 16) {
                        console.log(forecast);
                    } else {
                        continue;
                    }
                }
        });
    // Set our map options
    // function initMap() {
    //     var mapCanvas = document.getElementById('map');
    //     var mapOptions = {
    //         zoom: 5,
    //         // This sets the center of the map at our location
    //         center: {
    //             lat: 29.9499,
    //             lng: -90.0702
    //         }
    //     };
    //
    //     // Render the map
    //     var map = new google.maps.Map(mapCanvas, mapOptions);
    //     var marker = new google.maps.Marker({
    //         position: {
    //             lat: restaurant.location.lat,
    //             lng: restaurant.location.lng
    //         },
    //         map: map
    //     });
    // }

});

         // path to New Orleans data from OpenWeatherMap(see below) //
    // data.list[8].main.temp_max
