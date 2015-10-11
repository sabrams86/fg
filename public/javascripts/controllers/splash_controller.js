app.controller('SplashController', ['$scope', '$cookies', '$location', 'CategoryService',
function ($scope, $cookies, $location, CategoryService) {
  CategoryService.getCategories().then(function (results) {
    $scope.categories = results;
  })
  $scope.search = function () {
    $location.path('/home');
  }
  $scope.signUp = function () {
    $location.path('/signup');
  }
}]);
