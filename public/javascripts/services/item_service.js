app.factory('ItemService', ['$http', '$cookies', function ($http, $cookies) {
  var Items = {};
  Items.getAllItems = function (query) {
    return $http.get('http://localhost:3000/items'+query).then(function (results) {
      return results.data;
    })
  }
  Items.getItem = function (itemId) {
    return $http.get('http://localhost:3000/items/'+itemId).then(function (results) {
      return results.data;
    })
  }
  Items.createItem = function (itemData) {
    return $http.post('http://localhost:3000/items', itemData).then(function (result) {
      return result.data;
    });
  }
  Items.updateItem = function (itemData, itemId) {
    return $http.post('http://localhost:3000/items/'+itemId, itemData).then(function (result) {
      return result.data;
    });
  }
  Items.deleteItem = function (itemId) {
    return $http.post('http://localhost:3000/items/'+itemId+'/delete');
  }
  Items.getUserItems = function (userId) {
    return $http.get('http://localhost:3000/users/'+userId+'/user_items').then(function (results) {
      return results.data;
    });
  }
  Items.addReservation = function (itemId, reservation) {
    return $http.post('http://localhost:3000/items/'+itemId+'/reserve', reservation).then(function (result) {
      return result;
    })
  }
  Items.updateAvailibility = function (itemId, dates) {
    return $http.post('http://localhost:3000/items/'+itemId+'/unavailable', dates).then(function (result) {
      return result;
    })
  }
  return Items;
}]);
