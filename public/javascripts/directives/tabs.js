app.directive("userTabs", function () {
  return {
    link: function(scope, elem, attrs) {
      angular.forEach(elem.find( '.menu .item' ), function(inputField) {
        $('.menu .item').tab();
      });
    },
    templateUrl: '/partials/templates/tabs.html',
  }
})
