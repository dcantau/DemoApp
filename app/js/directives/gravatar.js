'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder) {
    return {
        restrict: 'E', // E Element
        template:  '<img />',
        replace: true,
        link: function(scope, element, attrs, controller) {
            attrs.$observe('email', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    attrs.$set('src', gravatarUrlBuilder.GetGravatarUrl(newValue));
                }
            });
        }
    }
});
