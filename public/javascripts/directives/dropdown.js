app.directive("categoryDropdown", function () {
  return {
    link: function(scope, elem, attrs) {
      angular.forEach(elem.find( "#multi-select" ), function(inputField) {
        $(inputField).dropdown();
      });
    },
    templateUrl: '/partials/templates/dropdown.html',
  }
})
app.directive("searchableCategoryDropdown", function () {
  return {
    link: function(scope, elem, attrs) {
      angular.forEach(elem.find( "#search-select" ), function(inputField) {
        $(inputField).dropdown();
      });
    },
    templateUrl: '/partials/templates/search_dropdown.html',
  }
})
