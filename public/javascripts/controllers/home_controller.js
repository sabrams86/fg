app.controller('HomeController', ['$scope', '$location', '$cookies', 'ItemService',
function ($scope, $location, $cookies, ItemService) {
  ItemService.getAllItems().then(function (results) {
    console.log(results);
    $scope.items = results;
  })
  $scope.newItem = function() {
    $location.path('/items/new');
  }
}]);
