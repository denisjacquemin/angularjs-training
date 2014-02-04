/* global myApp */
/* global console */
"use strict";

myApp.controller('Exo4Ctrl', function ($scope, HttpSrvc) {
    $scope.doesItWorks = "Yes it works";
    console.log("HttpSrvc is ");
    console.log(HttpSrvc);
});