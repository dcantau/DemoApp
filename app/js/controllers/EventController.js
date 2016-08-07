'use strict';

eventsApp.controller("EventController", function($scope, $log, eventData) {
    $scope.sortorder = '-upVoteCount';
    $scope.query= '';
    eventData.getEvent().success(function(data) {
        $scope.event = data;
    }).error(function(data, status, headers,config){
        $log.warn(data, status, headers, config);
    });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0)
            session.upVoteCount--;
    };

});