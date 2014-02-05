/* global myApp */
/* global console */
"use strict";

myApp.controller('Exo4Ctrl', function ($scope, HttpSrvc, loadedDatas) {
    $scope.doesItWorks = "Yes it works";
    //$scope.datas = HttpSrvc.getData();
    $scope.datas = loadedDatas;
});