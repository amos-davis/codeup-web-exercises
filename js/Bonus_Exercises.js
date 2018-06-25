"use strict";

(function () {



var letterChange = function (string) {
    var newLetters = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            newLetters += string[i].toUpperCase();
        } else {
            newLetters += string[i].toLowerCase();
        }

    console.log(newLetters);
    }
};

var text = "I hoPe ThIs WoRked!456";
var SwapText = letterChange(text);


})();

