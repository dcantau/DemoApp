'use strict';

eventsApp.controller("EventController", function($scope, eventData) {
    $scope.sortorder = '-upVoteCount';
    $scope.query= '';
    eventData.getEvent(function(event) {
        $scope.event = event;
    });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0)
            session.upVoteCount--;
    };

});