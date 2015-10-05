app.factory('ItemService', ['$http', '$cookies', function ($http, $cookies) {
  var Items = {};

  Items.getItems = function (cookie) {
    return $http.get('/items/' + cookie).then(function (results) {
      return results.data;
    });
  }

  Items.createItem = function (itemData) {
    console.log(itemData);
    return $http.post('http://localhost:3000/items', itemData).then(function (result) {
      console.log(result);
      return result.data;
    });
  }

  return Items;
}]);
