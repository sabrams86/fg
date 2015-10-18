app.controller('HomeController', ['$scope', '$location', '$cookies', 'ItemService', 'CategoryService',
function ($scope, $location, $cookies, ItemService, CategoryService) {
  ItemService.getAllItems($location.url().split('?')[1]).then(function (results) {
    $scope.items = results;
  })
  CategoryService.getCategories().then(function (results) {
    $scope.categories = results;
  })
  $scope.order = 'price';
  $scope.orderDir = '';
  $scope.orderByPrice = function () {
    $scope.orderDir = ($scope.orderDir === '') ? 'reverse' : '';
  }
  $scope.newItem = function() {
    $location.path('/items/new');
  }
  $scope.filterCategory = function (category) {
    ItemService.getAllItems("?category="+category.name).then(function (results) {
      $scope.items = results
    })
  }
}]);
