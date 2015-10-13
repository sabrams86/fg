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
    $location.path('/items/'+itemId+'/edit');
  }
  $scope.unAvailableDates = [];
  $scope.updateAvailibility = function () {
    ItemService.updateAvailibility($scope.item._id, $scope.unAvailableDates).then(function (status) {
      if (status) {
        console.log(status);
      } else {
        alert("Some of those dates have already been reserved, you may have to cancel some reservations");
      }
    })
  }
  $scope.selectDate = function (a, day) {
    var stringDate = day.year + '-' + day.month + '-' + day.day;
    var selectedDate = {"date": stringDate, "is_available": false };
    $scope.unAvailableDates.push(selectedDate);
  }
}])
