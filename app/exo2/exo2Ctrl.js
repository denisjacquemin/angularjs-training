myApp.controller('Exo2Ctrl', function($scope) {
    $scope.displayingFromCtrl = "Hello, world from controller!";

    $scope.displayHouseNumber = function() {
        console.log($scope.user);
        console.log($scope.user.house);
        console.log($scope.user.house.number);
    };

});