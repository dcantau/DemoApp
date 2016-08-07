'use strict';

eventsApp.controller("MyCacheSampleController", function($scope, myCache) {

    $scope.key = "";
    $scope.value = "";

    $scope.addToCache = function(key, value) {
        myCache.put(key, value);
    };

    $scope.readFromCache = function(key) {
        return myCache.get(key);
    };

    $scope.getCacheStats = function() {
        return myCache.info();
    }

});