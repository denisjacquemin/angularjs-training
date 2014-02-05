/* global myApp */
/* global console */
"use strict";

myApp.service('HttpSrvc', function ($http, $q) {
    return {
        getData: function () {
            return [1, 2, 3];
        },
        wrappedGet: function (url, config) {
            var deferred = $q.defer();
            $http.get(url, config).then(

                function successCallback(result) {
                    deferred.resolve(result.data);
                },

                function errorCallback(result) {
                    deferred.reject(result);
                }

            );
            return deferred.promise;
        }
    };
});