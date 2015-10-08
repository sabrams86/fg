app.factory('AuthService', ['$http', '$cookies', '$q', function ($http, $cookies, $q) {
  var Auth = {};
  Auth.login = function (userInfo) {
    return $http.post('http://localhost:3000/login', userInfo).then(function (results) {
      $cookies.put('user', results.data._id);
      return true;
    })
  }
  Auth.logout = function () {
    $cookies.remove('user')
    return false;
  }
  Auth.checkLoggedIn = function () {
    var deferred = $q.defer();
    if ($cookies.get('user')) {
      deferred.resolve(true);
    } else {
      deferred.reject(false);
    }
    return deferred.promise;
  }
  return Auth;
}])
