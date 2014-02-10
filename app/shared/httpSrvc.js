/* global myApp */
/* jslint node: true */ // use strict at top

"use strict";

myApp.service("HttpSrvc", function($http, $q) {

    return {
      myGet: function(url, config) {
          var deferred = $q.defer();
          $http.get(url, config).then(
              function successCallBack(result) {
                  deferred.resolve(result.data);
              },
              function errorCallBack(reason) {
                  deferred.reject(reason);
              }
          );
          return deferred.promise;
      }
    };

});