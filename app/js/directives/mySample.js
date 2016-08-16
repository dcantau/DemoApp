'use strict';

eventsApp.directive('mySample', function() {
    return {
        restrict: 'C', // C Class
        template: "<input text='text' ng-model='sampleData'/> {{ sampleData }}<br/>"
    };
});
