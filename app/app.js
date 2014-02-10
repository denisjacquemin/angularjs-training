/* global angular */
/* global _ */

var myApp = angular.module('myApp', ['ngRoute']);


myApp.config( function($routeProvider) {

    $routeProvider
        .when('/basic', {
            templateUrl: 'app/basic/basic.html'
        }).when('/exo4', {
            templateUrl: 'app/exo4/exo4.html',
            controller: 'Exo4Ctrl',
            resolve: {
                loadedQuotes: function(HttpSrvc, $q, u) {

                    var deffered = $q.defer();
                    var handleLoadedQuotesSuccessfully = function(theQuotes)  {
                        var id = Math.floor(Math.random() * theQuotes.length);

                        theQuotes = u.reject(theQuotes, function(quote, idx) {
                            return u.isEqual(idx, id);
                        });
                        //theQuotes.splice(id, 1);
                        deffered.resolve(theQuotes);
                    };

                    HttpSrvc.myGet("/rest/quote").then(handleLoadedQuotesSuccessfully);


                    return deffered.promise;
                }
            }
        }).when('/exo5', {
                    templateUrl: 'app/exo5/exo5.html'
        }).when('/exo6', {
            templateUrl: 'app/exo6/exo6.html'
        }).when('/error', {
            templateUrl: 'app/error/error.html'
        })
        .otherwise({ redirectTo: '/error' });
});


myApp.run(function($rootScope) {

    $rootScope.$on("$routeChangeSuccess", function() {
        console.log('Route changed with success');
        for (var i=0; i < arguments.length; i += 1) {
            console.log(arguments[i]);
        }
    });

});
