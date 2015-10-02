app.factory('ItemService', ['$http', '$cookies', function ($http, $cookies) {
  var Items = {};

  Items.getItems = function (cookie) {
    return $http.get('/items/' + cookie).then(function (results) {
      return results.data;
    });
  }
  
}])
