app.controller('SplashController', ['$scope', '$cookies', '$location', 'CategoryService',
function ($scope, $cookies, $location, CategoryService) {
  CategoryService.getCategories().then(function (results) {
    $scope.categories = results;
  })
  $scope.search = function () {
    $location.url('/home?startDate='+$("#startDate").val()+'&endDate='+$("#endDate").val()+'&category='+$('.text').html()+'&location='+$scope.location);
  }
  $scope.signUp = function () {
    $location.path('/signup');
  }
}]);
