app.controller('SplashController', ['$scope', '$cookies', '$location', 'CategoryService',
function ($scope, $cookies, $location, CategoryService) {
  CategoryService.getCategories().then(function (results) {
    $scope.categories = results;
  })
  $scope.search = function () {
    var startDate = new Date($("#startDate").val()).getTime();
    var endDate = new Date($("#endDate").val()).getTime();
    $location.url('/home?startDate='+startDate+'&endDate='+endDate+'&category='+$('.text').html()+'&location='+$scope.location);
  }
  $scope.signUp = function () {
    $location.path('/signup');
  }
}]);
