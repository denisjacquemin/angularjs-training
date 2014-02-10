/* global myApp */
/* jslint node: true */ // use strict at top

"use strict";

myApp.controller("NestedCtrl", function($scope){

    $scope.mynested = 'nested from ctrl';

    $scope.iamclicked = function() {
        $scope.$emit("EVENT-iamclicked", "arg1", 12);
    };

    $scope.$on("EVENT-broadcaster", function(event, arg1) {
        console.log("event broadcaster at " + arg1);
    });

});