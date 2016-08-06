eventsApp.controller('EditProfileController', function($scope, gravatarUrlBuilder) {

    $scope.user = {
    };

    $scope.GetGravatarUrl = function(email) {
        return gravatarUrlBuilder.GetGravatarUrl(email);
    };

});