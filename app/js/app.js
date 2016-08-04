'use strict';

var eventsApp = angular.module('eventsApp', []);

eventsApp.controller("EventController", function($scope) {
    $scope.sortorder = '-upVoteCount';
    $scope.event = {
        name: "Angular Boot Camp",
        date: "1/1/2013",
        time: "10:30 am",
        location: {
            address: "Google Headquarters",
            city: "Mountain View",
            province: "CA"
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: "Directives Masterclass",
                creatorName: "Bob Smith",
                duration: "1 hr",
                level: "Advanced",
                abstract: "In this session you will learn the ins and outs of directives!",
                upVoteCount: 2,
            },
            {
                name: "Scopes for fun and profit",
                creatorName: "John Doe",
                duration: "30 mins",
                level: "Introductory",
                abstract: "This session will take a closer look at scopes. Learn what the do, how they do it, and how to get them to do it for you",
                upVoteCount: 3,
            },
            {
                name: "Well Behaved Controllers",
                creatorName: "Jane Doe",
                duration: "2 hours",
                level: "Intermediate",
                abstract: "Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbours.",
                upVoteCount: 35,
            },
        ]
    };

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0)
            session.upVoteCount--;
    };

});