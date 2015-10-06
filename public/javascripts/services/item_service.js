app.factory('ItemService', ['$http', '$cookies', function ($http, $cookies) {
  var Items = {};
  Items.getAllItems = function () {
    return $http.get('/items').then(function (results) {
      return results.data;
    })
  }
  Items.getItem = function (itemId) {
    return $http.get('http://localhost:3000/items/'+itemId).then(function (results) {
      return results.data;
    })
  }
  Items.getUserItems = function (cookie) {
    return $http.get('/items/' + cookie).then(function (results) {
      return results.data;
    });
  }
  Items.createItem = function (itemData) {
    return $http.post('http://localhost:3000/items', itemData).then(function (result) {
      return result.data;
    });
  }
  Items.deleteItem = function (itemId) {
    return $http.post('http://localhost:3000/items/'+itemId+'/delete');
  }
  return Items;
}]);
