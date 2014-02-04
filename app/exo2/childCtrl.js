/* global myApp */
/* global console */
"use strict";

myApp.controller('ChildCtrl', function ($scope) {
    $scope.displayingFromCtrl += "extendedByChildren";
    $scope.childCtrlVariable = "privateToChildVariable";
});