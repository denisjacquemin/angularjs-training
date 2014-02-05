/* global angular */
/* global console */
"use strict";

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/basic', {
            templateUrl: 'app/exo2/exo2.html'
        }).when('/error', {
            templateUrl: 'app/error/error.html'
        }).when('/exo4', {
            templateUrl: 'app/exo4/exo4.html',
            controller: 'Exo4Ctrl',
            resolve: {
                loadedDatas: function ($q, $window, HttpSrvc, u) {
                    var deferred = $q.defer();

                    var handleWrappedGetSuccess = function (quotes) {
                        var id = Math.floor(Math.random() * quotes.length);
                        //quotes.splice(id, 1);
                        quotes =
                            u.reject(quotes, function (num, index) {return u.isEqual(index, id); });
                        deferred.resolve(quotes);
                    };

                    HttpSrvc.wrappedGet("/rest/quote").then(handleWrappedGetSuccess);
                    return deferred.promise;
                }
            }
        }).otherwise({
            redirectTo: '/error'
        });



});

myApp.config(function ($httpProvider, $provide) {

    // Intercept http calls.
    $provide.factory('MyHttpInterceptor', function ($q) {
        return {
            // On request success
            request: function (config) {
                // console.log(config); // Contains the data about the request before it is sent.
                if (config.url.indexOf("/rest") === 0) {
                    console.log("request send successfully");
                }
                // Return the config or wrap it in a promise if blank.
                return config || $q.when(config);
            },

            // On request failure
            requestError: function (rejection) {
                // console.log(rejection); // Contains the data about the error on the request.

                // Return the promise rejection.
                return $q.reject(rejection);
            },

            // On response success
            response: function (response) {
                // console.log(response); // Contains the data from the response.
                if (response.config.url.indexOf("/rest") === 0) {
                    console.log("response successfully received");
                }
                // Return the response or promise.
                return response || $q.when(response);
            },

            // On response failture
            responseError: function (rejection) {
                // console.log(rejection); // Contains the data about the error.

                // Return the promise rejection.
                return $q.reject(rejection);
            }
        };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('MyHttpInterceptor');

});

myApp.run(function ($rootScope) {
        $rootScope.$on("$routeChangeSuccess", function () {
            console.log("route changed successfully");
        });
    });