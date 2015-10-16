app.factory('ContractService', ['$http', '$cookies', '$q',
function ($http, $cookies, $q) {
  var Service = {};

  Service.createContract = function (contractData) {
    return $http.post('http://fg.abramswebdevelopment.com/items/'+contractData.contract.itemId+'/contracts', contractData).then(function (result) {
      return result.data;
    })
  }
  Service.getContract = function (itemId, contractId) {
    return $http.get('http://fg.abramswebdevelopment.com/items/'+itemId+'/contracts/'+contractId).then(function (result) {
      return result.data;
    })
  }
  Service.deleteContract = function (itemId, contractId) {
    return $http.post('http://fg.abramswebdevelopment.com/items/'+itemId+'/contracts/'+contractId+'/delete').then(function (result) {
      return result.data;
    })
  }
  Service.updateContractStatus = function (itemId, contractId, status) {
    return $http.post('http://fg.abramswebdevelopment.com/items/'+itemId+'/contracts/'+contractId+'/'+status).then(function (result) {
      return result.data;
    })
  }
  Service.getUserContracts = function (userId, type) {
    return $http.get('http://fg.abramswebdevelopment.com/contracts/'+userId+'/'+type).then(function (results) {
      return results.data;
    })
  }
  return Service;
}])
