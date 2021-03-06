app.factory('UserService', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
  var Users = {};

  Users.getUser = function (userId) {
    return $http.get('http://localhost:3000/users/' + userId).then(function (result) {
      return result.data;
    });
  }
  Users.signUpUser = function (userInfo) {
    return $http.post('http://localhost:3000/users', userInfo).then(function (results) {
      $cookies.put('user', results.data._id);
      $rootScope.userLoggedIn = true;
      return results.data;
    });
  }
  Users.updateUser = function (userInfo, userId) {
    return $http.post('http://localhost:3000/users/'+userId, userInfo).then(function (results) {
      console.log(results.data);
      return results.data;
    });
  }
  Users.deleteUser = function (userId) {
    return $http.post('http://localhost:3000/users/'+userId+'/delete').then(function (result) {
      return result.data;
    })
  }
  Users.login = function (userInfo) {
    return $http.post('http://localhost:3000/login', userInfo).then(function (results) {
      $cookies.put('user', results.data._id);
      $rootScope.userLoggedIn = true;
      return results.data
    })
  }
  Users.logout = function () {
    $rootScope.userLoggedIn = false;
    $cookies.remove('user')
  }
  return Users;
}])
