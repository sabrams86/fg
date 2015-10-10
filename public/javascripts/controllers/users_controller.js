app.controller('UsersController', ['$scope', '$location', '$cookies', 'UserService', 'ItemService',
function ($scope, $location, $cookies, UserService, ItemService) {
  UserService.getUser($cookies.get('user')).then(function (user) {
    $scope.user = user;
    return user;
  }, function (err) {
    $location.path('/');
  }).then(function (userInfo) {
    return ItemService.getUserItems(userInfo._id).then(function (userItems) {
      $scope.userItems = userItems;
      return userItems;
    })
  })

  $scope.updateUser = function () {
    $scope.userData = {
      'user':{
        '_id': $cookies.get('user'),
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
    UserService.updateUser(this.userData, $cookies.get('user')).then(function (result) {
      $location.path('/users/'+result.user._id)
    })
  }

}])
