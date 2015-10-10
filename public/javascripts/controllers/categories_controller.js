app.controller('CategoriesController', ['$scope', '$location', 'CategoryService',
function ($scope, $location, CategoryService) {
  CategoryService.getCategories().then(function (results) {
    $scope.categories = results;
  })
  $scope.createCategory = function () {
    $scope.categoryData = {
      category: {
        name: $scope.name,
        parent: $scope.parent
      }
    }
    CategoryService.createCategory(this.categoryData).then(function (result) {
      $scope.categories.push(result);
      $scope.name = '';
      $scope.parent = '';
    })
  }
  $scope.deleteCategory = function (category) {
    CategoryService.deleteCategory(category._id).then(function () {
      $scope.categories.splice(category, 1)
    })
  }
}])
