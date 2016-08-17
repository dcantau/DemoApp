'use strict';

eventsApp.directive('collapsible', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-show="visibility" ng-transclude></div></div>',
        controller: function($scope) {
            $scope.visibility = true;
            $scope.toggleVisibility = function() {
                $scope.visibility = ! $scope.visibility;
            }
        },
        transclude: true,
        scope: {
            title: '@'
        }
    };
});