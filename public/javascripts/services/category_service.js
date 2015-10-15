app.factory('CategoryService', ['$http', '$cookies', function ($http, $cookies) {
  var CatService = {};

  CatService.getCategories = function () {
    return $http.get('http://quiet-atoll-7804.herokuapp.com/categories').then(function (results) {
      return results.data;
    })
  }

  CatService.createCategory = function (categoryData) {
    return $http.post('http://quiet-atoll-7804.herokuapp.com/categories', categoryData).then(function (result) {
      return result.data;
    })
  }

  CatService.deleteCategory = function (categoryId) {
    return $http.post('http://quiet-atoll-7804.herokuapp.com/categories/'+categoryId+'/delete').then(function (result) {
      return result.data;
    })
  }

  return CatService;
}])
