app.factory('PaymentService', ['$http', '$cookies', function ($http, $cookies) {
  var VenmoPayment = {};

  VenmoPayment.venmoLogin = function () {
    $location.path('https://api.venmo.com/v1/oauth/authorize?client_id=2988&scope=make_payments%20access_profile');
  }

  VenmoPayment.makePayment = function (payload) {
    return $http.post('http://localhost:3000/makePayment', payload).then(function (result) {
      console.log(result);
    })
  }

  return VenmoPayment;
}])
