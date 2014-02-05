/* global angular */
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