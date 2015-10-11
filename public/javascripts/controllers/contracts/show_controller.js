app.controller('ShowContractsController',
['$scope', '$location', '$cookies', 'AuthService', 'ItemService', 'ContractService',
function ($scope, $location, $cookies, AuthService, ItemService, ContractService) {
  ItemService.getItem($location.path().split('/')[2]).then(function (result) {
    $scope.item = result;
  })
  ContractService.getContract($location.path().split('/')[2], $location.path().split('/')[4]).then(function (result) {
    $scope.contract = result;
  })
  $scope.updateContract = function () {
    var contractData = {
      contract: {
        startDate: $scope.startDate,
        endDate: $scope.endDate,
        status: $scope.status,
      }
    }
    ContractService.updateContract(contractData).then(function (result) {
      $location.path('/items/'+result.itemId+'/contracts/'+result._id);
    })
  }
  $scope.approveContract = function () {
    var status = {status: 'approved'};
    ContractService.approveContract($scope.item._id, $scope.contract._id, status).then(function (result) {
      $scope.contract.status = 'approved';
    })
  }
  $scope.deleteContract = function () {
    ContractService.deleteContract($scope.item._id, $scope.contract._id).then(function (result) {
      console.log($scope.item._id);
      $location.path('/items/'+$scope.item._id);
    })
  }
}])
