/* global myApp */
/* global console */
"use strict";

myApp.controller('ChildCtrl', function ($scope) {
    $scope.displayingFromCtrl += "extendedByChildren";
    $scope.childCtrlVariable = "privateToChildVariable";
    $scope.nestedNgClick = function () {
        $scope.$emit("EVENT-FROM-CHILD", "myarg");
    };
    $scope.$on("BROADCASTED-EVENT", function (event) {
        console.log("broadcasted event received from children " + Array.prototype.slice.call(arguments, 1));
    });
});