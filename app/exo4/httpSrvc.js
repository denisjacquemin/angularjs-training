/* global myApp */
/* global console */
"use strict";

myApp.service('HttpSrvc', function ($http) {
    return {
        getData: function () {
            return [1, 2, 3];
        }
    };
});