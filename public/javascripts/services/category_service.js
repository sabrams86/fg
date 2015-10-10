app.factory('CategoryService', ['$http', '$cookies', function ($http, $cookies) {
  var CatService = {};

  CatService.getCategories = function () {
    return $http.get('http://localhost:3000/categories').then(function (results) {
      return results.data;
    })
  }

  CatService.createCategory = function (categoryData) {
    return $http.post('http://localhost:3000/categories', categoryData).then(function (result) {
      return result.data;
    })
  }

  CatService.deleteCategory = function (categoryId) {
    return $http.post('http://localhost:3000/categories/'+categoryId+'/delete').then(function (result) {
      return result.data;
    })
  }

  return CatService;
}])
