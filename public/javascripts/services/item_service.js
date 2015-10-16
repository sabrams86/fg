app.factory('ItemService', ['$http', '$cookies', function ($http, $cookies) {
  var Items = {};
  Items.getAllItems = function (query) {
    return $http.get('http://fg.abramswebdevelopment.com/items?'+query).then(function (results) {
      return results.data;
    })
  }
  Items.getItem = function (itemId) {
    return $http.get('http://fg.abramswebdevelopment.com/items/'+itemId).then(function (results) {
      return results.data;
    })
  }
  Items.createItem = function (itemData) {
    return $http.post('http://fg.abramswebdevelopment.com/items', itemData).then(function (result) {
      return result.data;
    });
  }
  Items.updateItem = function (itemData, itemId) {
    return $http.post('http://fg.abramswebdevelopment.com/items/'+itemId, itemData).then(function (result) {
      return result.data;
    });
  }
  Items.deleteItem = function (itemId) {
    return $http.post('http://fg.abramswebdevelopment.com/items/'+itemId+'/delete');
  }
  Items.getUserItems = function (userId) {
    return $http.get('http://fg.abramswebdevelopment.com/users/'+userId+'/user_items').then(function (results) {
      return results.data;
    });
  }
  Items.addReservation = function (itemId, reservation) {
    return $http.post('http://fg.abramswebdevelopment.com/items/'+itemId+'/reserve', reservation).then(function (result) {
      return result;
    })
  }
  Items.updateAvailibility = function (itemId, dates) {
    return $http.post('http://fg.abramswebdevelopment.com/items/'+itemId+'/unavailable', dates).then(function (result) {
      return result;
    })
  }
  return Items;
}]);
