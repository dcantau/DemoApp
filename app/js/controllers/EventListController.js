eventsApp.controller('EventListController', function($scope, $location, eventData) {
    $scope.events = eventData.getAllEvents();
});