app.factory('MailService', ["$http", "$cookies", 'UserService', function ($http, $cookies, UserService) {
  var Mailer = {};

  Mailer.newContractMailer = function (contract) {
    var emailData = {
      renterEmailData: {
        subject: "You have a new FriendlyGear rental pending",
        text: "The owner of the item you have requested has been notified and you will recieve a confirmation when your rental request has been accepted",
      },
      ownerEmailData: {
        subject: "You have a new FriendlyGear rental request",
        text: "You have a new rental request.  Please log in to FriendlyGear to confirm or reject this rental."
      },
    }
    return UserService.getUser(contract.renterId).then(function (renter) {
      emailData.renterEmailData.email_from = renter.user.email;
      emailData.ownerEmailData.email_to = renter.user.email;
      return emailData;
    }).then(function (emailData) {
      return UserService.getUser(contract.ownerId).then(function (owner) {
        emailData.renterEmailData.email_to = owner.user.email;
        emailData.ownerEmailData.email_from = owner.user.email;
        return emailData;
      })
    }).then(function (emailData) {
      console.log(emailData);
      $http.post('http://localhost:3000/send', emailData.renterEmailData)
      $http.post('http://localhost:3000/send', emailData.ownerEmailData).then(function (status) {
          return status;
      }).then(function (emailData) {
        console.log(emailData);
      })
    })
  }

  return Mailer;
}])
