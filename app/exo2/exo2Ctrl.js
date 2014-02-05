/* global myApp */
/* global console */
"use strict";

myApp.controller('Exo2Ctrl', function ($scope, $rootScope) {
    $scope.displayingFromCtrl = "Hello, world from controller!";

    $scope.displayHouseNumber = function () {
//        console.log($scope.user);
//        console.log($scope.user.house);
//        console.log($scope.user.house.number);
        $rootScope.$broadcast("BROADCASTED-EVENT", "some", "other", "arg");
    };

    $scope.$on("EVENT-FROM-CHILD", function (event, arg1) {
        console.log("inside Parent controller, received " + arg1);
    });
});