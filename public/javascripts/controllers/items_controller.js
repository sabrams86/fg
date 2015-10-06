app.controller('ItemsController', ['$scope', '$cookies', '$location', 'ItemService',
function ($scope, $cookies, $location, ItemService) {
  $scope.newItem = function() {
    $location.path('/items/new');
  }
  $scope.showItem = function () {

  }
  $scope.createItem = function() {
    $scope.itemData = {
      'item': {
        'name': $scope.name,
        'brand': $scope.brand,
        'condition': $scope.condition,
        'datePurchased': $scope.datePurchased,
      }
    }
    ItemService.createItem(this.itemData).then(function (results) {
      $location.path('/items/'+results._id)
    });
  }
}]);
