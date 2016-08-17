'use strict';

eventsApp.directive('upvote', function() {
    return {
        restrict: 'E', // E, A, C and M stands for Element, Attribute, Class and Comment
        replace: true,
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upvote: '&',
            downvote: '&',
            count: '=',
        }
    };
});