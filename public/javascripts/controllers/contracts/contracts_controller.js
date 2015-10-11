app.controller('ContractsController',
['$scope', '$location', '$cookies', 'AuthService', 'ItemService', 'ContractService',
function ($scope, $location, $cookies, AuthService, ItemService, ContractService) {
  ItemService.getItem($location.path().split('/')[2]).then(function (result) {
    $scope.item = result;
  })
  $scope.createContract = function () {
    var contractData = {
      contract: {
        itemId: $scope.item._id,
        ownerId: $scope.item.userId,
        renterId: $scope.currentUser,
        startDate: $scope.startDate,
        endDate: $scope.endDate,
        status: "Pending",
      }
    }
    ContractService.createContract(contractData).then(function (result) {
      $location.path('/items/'+result.itemId+'/contracts/'+result._id);
    })
  }
}])
