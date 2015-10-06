app.controller('ShowItemController', ['$scope', '$cookies', '$location', 'ItemService',
function ($scope, $cookies, $location, ItemService) {
  ItemService.getItem($location.path().split('/')[2]).then(function (result) {
    $scope.item = result;
  })
  $scope.deleteItem = function (itemId) {
    ItemService.deleteItem(itemId).then(function () {
      $location.path('/home');
    })
  }
  $scope.editItem = function (itemId) {
    ItemService.deleteItem(itemId).then(function () {
      $location.path('/items/'+itemId+'/edit');
    })
  }
}])
