'use strict';

eventsApp.controller("EventController", function($scope, $log, $anchorScroll, $routeParams, eventData) {
    $scope.sortorder = '-upVoteCount';
    $scope.query= '';

    eventData.getEvent($routeParams.eventId)
        .$promise
        .then(function(event) {
            $scope.event = event;
        })
        .catch(function(response) {
            console.log(response);
        });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0)
            session.upVoteCount--;
    };

    $scope.scrollToSession = function() {
        $anchorScroll();
    };

});