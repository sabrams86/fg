app.controller('SplashController', ['$scope', '$cookies', '$location',
function ($scope, $cookies, $location) {
  $scope.search = function () {
  $location.path('/home');
}
}]);
