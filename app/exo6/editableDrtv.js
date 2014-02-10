/* global myApp */
/* jslint node: true */ // use strict at top

"use strict";

myApp.directive("editableDrtv", function() {

    return {
        restrict : 'E',
            scope : {
            name: '@'
        },
        templateUrl: "app/exo6/editable.html",
        link : function(scope, element, attrs){
            // editMode is disable by default
            scope.editMode = false;

            // find the input elemnt of this directive ...
            var input = element.find('input');

            input.bind('blur', function(){
                scope.$apply(function(){
                    // the change is to disable the editMode
                    scope.editMode = false;
                });
            });
        }
    }


});