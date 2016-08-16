'use strict';

eventsApp.directive('datePicker', function() {
    return {
        restrict: 'A', // A Attribute
        link: function(scope, element, attrs, controller) {
            element.datepicker();
        }
    }
});
