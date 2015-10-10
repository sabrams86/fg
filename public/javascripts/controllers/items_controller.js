app.controller('ItemsController', ['$scope', '$cookies', '$location', 'ItemService','CategoryService',
function ($scope, $cookies, $location, ItemService, CategoryService) {
  CategoryService.getCategories().then(function (results) {
    $scope.categories = results;
  })
  $scope.newItem = function() {
    $location.path('/items/new');
  }
  $scope.createItem = function() {
    console.log($scope.categories);
    $scope.itemData = {
      'item': {
        'name': $scope.name,
        'brand': $scope.brand,
        'condition': $scope.condition,
        'datePurchased': $scope.datePurchased,
        'description': $scope.description,
        'imageUrl': $scope.imageUrl,
        'categories': $scope.categories,
        'userId': $cookies.get('user')
      }
    }
    ItemService.createItem(this.itemData).then(function (results) {
      $location.path('/items/'+results._id)
    });
  }
}]);
