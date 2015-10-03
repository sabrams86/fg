var app = angular.module('friendlyGear', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider','$locationProvider', ($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/splash.html',
      controller: 'SplashController'
    })
    .when('/home', {
      templateUrl: '/partials/home.html',
      controller: 'SplashController'
    })
    .otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);
