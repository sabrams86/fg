app.factory('UserService', ['$http', '$cookies', function ($http, $cookies) {
  var Users = {};

  Users.getUser = function (cookie) {
    return $http.get('/users/' + cookie).then(function (results) {
      return results.data;
    });
  }
  Users.signUpUser = function (userInfo) {
    console.log(userInfo);
    return $http.post('http://localhost:3000/users', userInfo).then(function (results) {
      $cookies.put('user', results.data._id);
      return results;
    });
  }

  return Users;
}])
