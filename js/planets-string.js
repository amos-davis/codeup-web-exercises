(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
// ---Still working on Bonus---
//
var stringBreaks = 'Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus';
console.log(stringBreaks);

var ulString = '<ul><li>Earth</li><li>Mars</li><li>Pluto</li></ul>';

var exampleString = '<ul>';
planetsArray.forEach(function(planet) {
    exampleString += '<li>' + planet + '</li>';
});
exampleString += '</ul>';
console.log(exampleString);

                        // ----or----

var exampleString = "<ul><li>";
exampleString +=planetsArray.join("</li><li><");
exampleString += "</li></ul>";

console.log(exampleString);


})();
