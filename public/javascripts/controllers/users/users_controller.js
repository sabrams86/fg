app.controller('UsersController', ['$scope', '$location', '$cookies', 'UserService', 'ItemService', 'ContractService',
function ($scope, $location, $cookies, UserService, ItemService, ContractService) {
  UserService.getUser($cookies.get('user')).then(function (results) {
    console.log(results);
    $scope.user = results.user;
    $scope.items = results.items;
    $scope.ownerContracts = results.sellerContracts;
    $scope.renterContracts = results.buyerContracts;
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
      $scope.items.splice(item);
    })
  }

}])
