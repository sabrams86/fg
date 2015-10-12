app.controller('ContractsController',
['$scope', '$location', '$cookies', 'AuthService', 'ItemService', 'ContractService',
function ($scope, $location, $cookies, AuthService, ItemService, ContractService) {
  ItemService.getItem($location.path().split('/')[2]).then(function (result) {
    $scope.item = result;
  })
  $scope.createContract = function () {
    var availability = [];
    var start = $scope.startDate.split('-');
    var end = $scope.endDate.split('-');
    // for(var i = )
    // {"date": "2016-06-09", "is_available": false },
    // {"date": "2016-06-10", "is_available": false },
    // {"date": "2016-06-11", "is_available": false },
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
    ItemService.setAvailibility(availability).then(function (status) {
      if (status) {
        ContractService.createContract(contractData).then(function (result) {
          $location.path('/items/'+result.itemId+'/contracts/'+result._id);
        })
      } else {
        alert("Some of those dates have already been reserved, please try a different range");
      }
    })
  }
  // $scope.selectDate = function (a, day) {
  //   console.log(a, day);
  // }
}])
