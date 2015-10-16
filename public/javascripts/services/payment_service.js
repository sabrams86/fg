app.factory('PaymentService', ['$http', '$cookies', '$window', function ($http, $cookies, $window) {
  var VenmoPayment = {};

  VenmoPayment.venmoLogin = function () {
    $location.path('https://api.venmo.com/v1/oauth/authorize?client_id=2988&scope=make_payments%20access_profile');
  }

  VenmoPayment.makePayment = function (payload) {
    return $http.post('http://fg.abramswebdevelopment.com/makePayment', payload).then(function (result) {
      console.log(result);
    })
  }

  VenmoPayment.payWithVenmo = function (payload) {
    console.log(payload);
    return $http.post('http://fg.abramswebdevelopment.com/venmoLogin', payload).then(function (result) {
      console.log('fooooooo');
      $window.location.href = 'https://api.venmo.com/v1/oauth/authorize?client_id=2988&scope=make_payments%20access_profile';
    })
  }

  return VenmoPayment;
}])
