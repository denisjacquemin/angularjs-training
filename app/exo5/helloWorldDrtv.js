/* global myApp */
"use strict";

myApp.directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: '<span>Hello {{name}}</span>',
            scope: {
                name: '@'
            }
        };
    }
);