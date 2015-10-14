var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')(process.env.SENDGRID_API);

router.post('/send', function (req, res, next) {
  var payload   = {
    to      : req.body.email_to,
    from    : req.body.email_from,
    subject : req.body.subject,
    text    : req.body.text
  }
  sendgrid.send(payload, function(err, json) {
    if (err) { console.error(err); }
    console.log(json);
  });
  // req.flash('info', 'Thank you, your message has been sent');
  res.json(json);
});

module.exports = router;

// var email = new sendgrid.Email({
//           from:     user.email,
//           subject:  comicMaster.title,
//           text:     'view your teleocomic online at /telecomics/' + record._id
//           });
//           email.setHtml('<p>You have been sent a TeleComic!!!!!</p><p>TeleComics is a site where users can create three panel comics with silly comments and translate them through five different languages before sending them to your friends! Click on the link to see the comic sent to you by another user.</p><p><a href="'+process.env.HOST+'/telecomics/'+record._id+'/public">View your comic</a></p>');
//           email.setTos(record.sentTo);
//           sendgrid.send(email, function(err, json) {
//             if (err) { return console.error(err); }
//             console.log(json);
//           });
