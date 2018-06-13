"use strict"

console.log("Hello from External JavaScript.");

alert("Welcome to my Website!");

var UserProvidedFavoriteColor = prompt("What is your favorite color?");
alert("Wow! " + UserProvidedFavoriteColor + " is my favorite color too! What a coincidence, right?");


// external script for exercise 3

var daysRentedLittleMermaidMovie = prompt("How many days did you rent The Little Mermaid?");
var daysRentedBrotherBearMovie = prompt("How many days did you rent Brother Bear?");
var daysRentedHerculesMovie = prompt("How many days did you rent Hercules?");
var priceOfRentalPerDay = prompt("What is the rental price per day?");
var totalRentalPriceOwed = (parseInt(daysRentedLittleMermaidMovie) + parseInt(daysRentedBrotherBearMovie) + parseInt(daysRentedHerculesMovie)) * priceOfRentalPerDay;

alert("You owe us, $" + totalRentalPriceOwed);


var GoogleHourlyPayRate = prompt("What was your hourly pay rate for Google?");
var FaceBookHourlyPayRate = prompt("What was your hourly pay rate for FaceBook?");
var AmazonHourlyPayRate = prompt("What was your hourly pay rate for Amazon?");

var hoursWorkedForGoogle = prompt("How many hours did you work for Google?");
var hoursWorkedForFaceBook = prompt("How many hours did you work for FaceBook?");
var hoursWorkedForAmazon = prompt("How many hours did you work for Amazon?");

var totalWeekPayForGoogle = parseInt(hoursWorkedForGoogle) * parseInt(GoogleHourlyPayRate);
var totalWeekPayForFaceBook = parseInt(hoursWorkedForFaceBook) * parseInt(FaceBookHourlyPayRate);
var totalWeekPayForAmazon = parseInt(hoursWorkedForAmazon) * parseInt(AmazonHourlyPayRate);

var TotalWeeksPay = totalWeekPayForAmazon + totalWeekPayForFaceBook + totalWeekPayForGoogle;

alert("Great Job! Your pay for the week is $" + TotalWeeksPay + ".");

