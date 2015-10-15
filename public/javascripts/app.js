var app = angular.module('friendlyGear', ['ngRoute', 'ngCookies', 'jkuri.bookingcalendar']);

app.config(['$routeProvider','$locationProvider', '$httpProvider',
($routeProvider, $locationProvider, $httpProvider) => {

  $routeProvider
    .when('/', { templateUrl: '/partials/splash.html', controller: 'SplashController' })
    .when('/home', { templateUrl: '/partials/home.html', controller: 'HomeController' })
    .when('/signup', { templateUrl: '/partials/users/new.html', controller: 'SignUpController' })
    .when('/users/:id', { templateUrl: '/partials/users/show.html', controller: 'UsersController' })
    .when('/users/:id/edit', { templateUrl: '/partials/users/edit.html', controller: 'UsersController' })
    .when('/items/new', { templateUrl: '/partials/items/new.html', controller: 'ItemsController' })
    .when('/items/:id', { templateUrl: '/partials/items/show.html', controller: 'ShowItemController' })
    .when('/items/:id/edit', { templateUrl: '/partials/items/edit.html', controller: 'EditItemController' })
    .when('/items/:itemId/contracts/new', { templateUrl: '/partials/contracts/new.html', controller: 'ContractsController' })
    .when('/items/:itemId/contracts/:id', { templateUrl: '/partials/contracts/show.html', controller: 'ShowContractsController' })
    .when('/items/:itemId/contracts/edit', { templateUrl: '/partials/contracts/edit.html', controller: 'ContractsController' })
    .when('/admin/categories', { templateUrl: '/partials/categories/index.html', controller: 'CategoriesController' })
    .otherwise({redirectTo: '/'});

  $httpProvider.defaults.withCredentials = true;
  $locationProvider.html5Mode(true);
}]);
