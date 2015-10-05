app.controller('HomeController', ['$scope', '$location', '$cookies',
function ($scope, $location, $cookies) {
  $scope.newItem = function() {
    $location.path('/items/new');
  }
}]);
