/* global myApp */

"use strict";

// naming convention is not followed here, "u" is more convenient.
myApp.factory('u', function ($window) {
    return $window._; // assumes underscore has already been loaded on the page
});