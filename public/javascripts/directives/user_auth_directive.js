app.directive('userAuthDirective', function () {
  return {
    scope: {},
    controller: ['$scope', '$location', '$cookies', 'UserService', 'AuthService', function ($scope, $location, $cookies, UserService, AuthService) {
      AuthService.checkLoggedIn().then(function(result) {
        $scope.userLoggedIn = true;
        $scope.currentUser = $cookies.get('user');
      }, function(result) {
        $scope.userLoggedIn = false;
      });
      $scope.logout = function () {
        $cookies.remove('user')
        $scope.userLoggedIn = false;
        $location.path('/')
      }
      $scope.login = function () {
        AuthService.login({username: $scope.username, password: $scope.password}).then(function (result) {
          $scope.userLoggedIn = true;
        });
      }
    }],
    templateUrl: '/partials/templates/userLogin.html',
  }
})
