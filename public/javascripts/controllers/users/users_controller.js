app.controller('UsersController', ['$scope', '$location', '$cookies', 'UserService', 'ItemService', 'ContractService',
function ($scope, $location, $cookies, UserService, ItemService, ContractService) {
  UserService.getUser($cookies.get('user')).then(function (user) {
    console.log(user);
    $scope.user = user;
    return user;
  }, function (err) {
    $location.path('/');
  }).then(function (userInfo) {
    return ItemService.getUserItems(userInfo._id).then(function (userItems) {
      $scope.userItems = userItems;
      return userInfo;
    })
  }).then(function (userInfo) {
    ContractService.getUserContracts(userInfo._id, 'owner').then(function (userOwnerContracts) {
      $scope.ownerContracts = userOwnerContracts;
    })
    return userInfo
  }).then(function (userInfo) {
    ContractService.getUserContracts(userInfo._id, 'renter').then(function (userRenterContracts) {
      $scope.renterContracts = userRenterContracts;
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
        'phone': $scope.phone,
        'avatarUrl': $scope.avatarUrl,
        'password': $scope.password,
      }
    }
    UserService.updateUser(this.userData, $cookies.get('user')).then(function (result) {
      $location.path('/users/'+result._id)
    })
  }
  $scope.deleteUser = function (userId) {
    UserService.deleteUser(userId).then(function (response) {
      $cookies.remove('user')
      $scope.userLoggedIn = false;
      $location.path('/')
    })
  }
  $scope.deleteItem = function (item) {
    ItemService.deleteItem(item._id).then(function () {
      $scope.userItems.splice(item);
    })
  }

}])
