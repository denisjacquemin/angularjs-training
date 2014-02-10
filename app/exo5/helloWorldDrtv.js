/* global myApp */
/* jslint node: true */ // use strict at top

"use strict";

myApp.directive("helloWorldDrtv", function(){
    return {
        restrict : 'E',
        scope : {
            name: '@'
        },
        template: '<span>Hello {{name}}</span>'
    }
});