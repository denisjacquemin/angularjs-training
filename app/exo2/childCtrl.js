myApp.controller('ChildCtrl', function($scope) {
    $scope.displayingFromCtrl += "extendedByChildren";
    $scope.childCtrlVariable = "privateToChildVariable";
});