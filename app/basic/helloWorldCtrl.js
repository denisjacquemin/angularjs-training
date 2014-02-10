/* global myApp */
/* jslint node: true */ // use strict at top

"use strict";

myApp.controller("HelloWorldCtrl", function($scope, $rootScope){

    $scope.other = 'hello world from ctrl';

    $scope.$on("EVENT-iamclicked", function(event, arg1, arg2) {
        console.log("event received " + arg1, + ' ' + arg2);

        $rootScope.$broadcast("EVENT-broadcaster", new Date());

    });

    $rootScope.$on("EVENT-iamclicked", function(event, arg1, arg2) {
        console.log("event received by root " + arg1, + ' ' + arg2);
    });

});