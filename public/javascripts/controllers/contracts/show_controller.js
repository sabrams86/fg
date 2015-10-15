app.controller('ShowContractsController',
['$scope', '$location', '$cookies', 'AuthService', 'ItemService', 'ContractService', 'UserService', 'PaymentService',
function ($scope, $location, $cookies, AuthService, ItemService, ContractService, UserService, PaymentService) {
  if (!$scope.userLoggedIn) $location.path('/');
  ContractService.getContract($location.path().split('/')[2], $location.path().split('/')[4]).then(function (result) {
    $scope.contract = result;
    ItemService.getItem(result.itemId).then(function (item) {
      $scope.item = item;
    })
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
  $scope.updateContractStatus = function (status) {
    ContractService.updateContractStatus($scope.item._id, $scope.contract._id, status).then(function (result) {
      $scope.contract.status = status;
    })
  }
  $scope.deleteContract = function () {
    ContractService.deleteContract($scope.item._id, $scope.contract._id).then(function (result) {
      $location.path('/items/'+$scope.item._id);
    })
  }
  $scope.payUser = function () {
    UserService.getUser($scope.contract.ownerId).then(function (owner) {
      var totalPrice = $scope.item.price * $scope.contract.reservedDates.length;
      var note = "FriendlyGear " + $scope.item.name + " rental :)"
      var payload = {
        itemId: $scope.item._id,
        contractId: $scope.contract._id,
        phone: owner.user.phone,
        amount: totalPrice,
        note: note,
      }
      PaymentService.payWithVenmo(payload);
    })
  }
}])
