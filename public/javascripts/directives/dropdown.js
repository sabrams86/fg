app.directive("categoryDropdown", function () {
  return {
    link: function(scope, elem, attrs) {
      angular.forEach(elem.find( "#multi-select" ), function(selectField) {
        selectField.dropdown();
      });
    }
  }
})
