app.factory('UserService', ['$http', '$cookies', function ($http, $cookies) {
  var Users = {};

  Users.getUser = function (userId) {
    return $http.get('http://localhost:3000/users/' + userId).then(function (result) {
      return result.data;
    });
  }
  Users.signUpUser = function (userInfo) {
    return $http.post('http://localhost:3000/users', userInfo).then(function (results) {
      $cookies.put('user', results.data._id);
      return results.data;
    });
  }

  return Users;
}])
