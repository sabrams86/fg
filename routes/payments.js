var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.get('/venmoLogin', function (req, res, next) {
  
  req.session.venmo_user_token = req.query.access_token;
  res.redirect('http://localhost:3474');
})

router.post('/makePayment', function (req, res, next) {
  console.log(req.body);
  console.log(req.session);
  unirest.post('https://api.venmo.com/v1/payments')
  .header('Accept', 'application/json')
  .send({ "access_token": req.session.venmo_user_token, "phone": req.body.phone, "amount": req.body.amount, "note": req.body.note })
  .end(function (response) {
    console.log(response.body);
    res.json(response.body);
  });
});

module.exports = router;
