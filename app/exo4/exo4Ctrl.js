/* global myApp */
/* jslint node: true */ // use strict at top

"use strict";

myApp.controller("Exo4Ctrl", function($scope, loadedQuotes){

    $scope.quotes = loadedQuotes;


//     HttpSrvc.myGet("/rest/quote").then (
//         function(successData) {
//             $scope.quotes = successData;
//         }
//     );

});