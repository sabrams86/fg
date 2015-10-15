app.controller('ItemsController', ['$scope', '$cookies', '$location', 'ItemService','CategoryService', 'UserService',
function ($scope, $cookies, $location, ItemService, CategoryService, UserService) {
  CategoryService.getCategories().then(function (results) {
    $scope.categories = results;
  })
  UserService.getUser($cookies.get('user')).then(function (result) {
    $scope.user = result;
  })
  $scope.newItem = function() {
    $location.path('/items/new');
  }
  $scope.createItem = function() {
    $scope.itemData = {
      'item': {
        'name': $scope.name,
        'brand': $scope.brand,
        'condition': $scope.condition,
        'datePurchased': $scope.datePurchased,
        'description': $scope.description,
        'imageUrl': $scope.imageUrl,
        'city': $scope.user.city,
        'state': $scope.user.state,
        'zip': $scope.user.zip,
        'price': $scope.price,
        'categories': $scope.categories,
        'userId': $cookies.get('user')
      }
    }
    ItemService.createItem(this.itemData).then(function (results) {
      $location.path('/items/'+results._id)
    });
  }
}]);
