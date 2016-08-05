'use strict';

eventsApp.controller("EditEventController", function($scope) {

    $scope.saveEvent = function(event, NewEventForm) {
        if (NewEventForm.$valid) {
            alert("event " + event.name + " saved!");
        }
    };

    $scope.cancelEdit = function() {
        window.location = '/EventDetails.html';
    };

});
