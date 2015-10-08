app.controller('UsersController', ['$scope', '$location', '$cookies', 'UserService', 'ItemService',
function ($scope, $location, $cookies, UserService, ItemService) {
  UserService.getUser($cookies.get('user')).then(function (user) {
    $scope.user = user;
    return user;
  }, function (err) {
    $location.path('/');
  }).then(function (userInfo) {
    return ItemService.getUserItems(userInfo._id).then(function (userItems) {
      console.log(userItems);
      $scope.userItems = userItems;
      return userItems;
    })
  })

}])
