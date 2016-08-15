'use strict';

describe('EditProfileController', function() {

    var $controllerConstructor, scope, mockGravatarBuilder;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarBuilder = sinon.stub({GetGravatarUrl: function() {}});
    }));


    it('should build the gravatar with the given email', function() {

        var email = 'joe@joe.com';

        var ctrl = $controllerConstructor('EditProfileController', {
            '$scope': scope,
            gravatarUrlBuilder: mockGravatarBuilder
        });

        scope.GetGravatarUrl(email);

        expect(mockGravatarBuilder.GetGravatarUrl.calledWith(email)).toBe(true);

    });

});