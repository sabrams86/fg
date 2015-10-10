var app = angular.module('friendlyGear', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider','$locationProvider', ($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/splash.html',
      controller: 'SplashController'
    })
    .when('/home', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/signup', {
      templateUrl: '/partials/signup.html',
      controller: 'SignUpController'
    })
    .when('/users/:id', {
      templateUrl: '/partials/users/show.html',
      controller: 'UsersController'
    })
    .when('/users/:id/edit', {
      templateUrl: '/partials/users/edit.html',
      controller: 'UsersController'
    })
    .when('/items/new', {
      templateUrl: '/partials/items/new.html',
      controller: 'ItemsController'
    })
    .when('/items/:id', {
      templateUrl: '/partials/items/show.html',
      controller: 'ShowItemController'
    })
    .when('/items/:id/edit', {
      templateUrl: '/partials/items/edit.html',
      controller: 'EditItemController'
    })
    .otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);
