(function() {
    "use strict";


    function makeUsername (firstName, age) {
        return firstName.length + firstName.toLowerCase().substring(0,1) + age.valueOf()
    }

    console.log(makeUsername("Jack", 12));









})();