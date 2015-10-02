var app = angular.module('friendlyGear', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/splash.html',
      controller: 'SplashController'
    })
    .otherwise({redirectTo: '/'});
}]);
