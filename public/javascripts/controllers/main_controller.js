app.controller('MainController', ['$scope', '$location', '$cookies', 'UserService', 'AuthService',
function ($scope, $location, $cookies, UserService, AuthService) {
  AuthService.checkLoggedIn().then(function(result) {
    $scope.userLoggedIn = true;
  }, function(result) {
    $scope.userLoggedIn = false;
  });
  $scope.logout = function () {
    $cookies.remove('user')
    $scope.userLoggedIn = false;
  }
  $scope.login = function () {
    AuthService.login({username: $scope.username, password: $scope.password}).then(function (result) {
      $scope.userLoggedIn = true;
    });
  }
}])
