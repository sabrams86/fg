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
