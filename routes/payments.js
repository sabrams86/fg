var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.post('/venmoLogin', function (req, res, next) {
  req.session.phone = req.body.phone;
  req.session.amount = req.body.amount;
  req.session.note = req.body.note;
  req.session.itemId = req.body.itemId;
  req.session.contractId = req.body.contractId;
  res.json("ok");
})

router.get('/makePayment', function (req, res, next) {
  // req.session.venmo_user_token = req.query.access_token;
  console.log('ITESDFO IDFE OINWF OINEF WOIENF OWIEFN OEIWNF ');
  unirest.post('https://api.venmo.com/v1/payments')
  .header('Accept', 'application/json')
  .send({ "access_token": req.query.access_token, "phone": req.session.phone, "amount": req.session.amount, "note": req.session.note })
  .end(function (response) {
    console.log(response.body);
    res.redirect('http://localhost:3474/items/'+req.session.itemId+'/contracts/'+req.session.contractId);
  });
});

module.exports = router;
