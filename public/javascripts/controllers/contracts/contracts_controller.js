app.controller('ContractsController',
['$scope', '$location', '$cookies', 'AuthService', 'ItemService', 'ContractService',
function ($scope, $location, $cookies, AuthService, ItemService, ContractService) {
  if (!$scope.userLoggedIn) $location.path('/');
  ItemService.getItem($location.path().split('/')[2]).then(function (result) {
    $scope.item = result;
  })
  $scope.reservedDates = [];
  $scope.createContract = function () {
    var contractData = {
      contract: {
        itemId: $scope.item._id,
        ownerId: $scope.item.userId,
        renterId: $scope.currentUser,
        startDate: $scope.startDate,
        endDate: $scope.endDate,
        reservedDates: $scope.reservedDates,
        status: "Pending",
      }
    }
    ItemService.addReservation($scope.item._id, $scope.reservedDates).then(function (status) {
      if (status) {
        ContractService.createContract(contractData).then(function (result) {
          $location.path('/items/'+result.itemId+'/contracts/'+result._id);
        })
      } else {
        alert("Some of those dates have already been reserved, please try a different range");
      }
    })
  }
  $scope.selectDate = function (a, day) {
    var stringDate = day.year + '-' + day.month + '-' + day.day;
    var selectedDate = {"date": stringDate, "is_available": false };
    $scope.reservedDates.push(selectedDate);
  }
}])
