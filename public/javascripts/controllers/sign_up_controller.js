app.controller('SignUpController', ['$scope', '$cookies', '$location', 'UserService',
function ($scope, $cookies, $location, UserService) {
  $scope.signUp = function () {
    $scope.user = {
      'user':{
        'username': $scope.username,
        'name': $scope.name,
        'email': $scope.email,
        'city': $scope.city,
        'state': $scope.state,
        'zip': $scope.zip,
        'avatarUrl': $scope.avatarUrl,
        'password': $scope.password,
        'passwordconfirm': $scope.passwordconfirm,
      }
    }
    UserService.signUpUser(this.user).then(function (result) {
      $location.path('/users/'+result._id)
    });
  }
}]);
