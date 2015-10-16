app.factory('CategoryService', ['$http', '$cookies', function ($http, $cookies) {
  var CatService = {};

  CatService.getCategories = function () {
    return $http.get('http://fg.abramswebdevelopment.com/categories').then(function (results) {
      return results.data;
    })
  }

  CatService.createCategory = function (categoryData) {
    return $http.post('http://fg.abramswebdevelopment.com/categories', categoryData).then(function (result) {
      return result.data;
    })
  }

  CatService.deleteCategory = function (categoryId) {
    return $http.post('http://fg.abramswebdevelopment.com/categories/'+categoryId+'/delete').then(function (result) {
      return result.data;
    })
  }

  return CatService;
}])
