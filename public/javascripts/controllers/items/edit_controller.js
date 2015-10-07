app.controller('EditItemController', ['$scope', '$cookies', '$location', 'ItemService',
function ($scope, $cookies, $location, ItemService) {
  ItemService.getItem($location.path().split('/')[2]).then(function (result) {
    $scope.item = result;
  })
  $scope.updateItem = function (itemId) {
    $scope.itemData = {
      'item': {
        'name': $scope.name,
        'brand': $scope.brand,
        'condition': $scope.condition,
        'datePurchased': $scope.datePurchased,
      }
    }
    ItemService.updateItem(this.itemData, itemId).then(function (results) {
      $location.path('/items/'+results._id)
    });
  }
}])
