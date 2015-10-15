var express = require('express');
var router = express.Router();
var auth = require('./../lib/authorization');
var dblib = require('./../lib/db_lib');

//SHOW
router.get('/users/:userId', function(req, res, next) {
  dblib.findOneUser(req.params.userId).then(function (user) {
    dblib.getItemsByUser(req.params.userId).then(function (items) {
      dblib.getContractsByUser(req.params.userId).then(function (contracts) {
        dblib.getUserContractItems(contracts).then(function (rentalItems) {
          var userContracts = dblib.sortUserContracts(contracts, rentalItems, req.session.user);
          res.json({
            user: user,
            items: items,
            sellerContracts: userContracts[1],
            buyerContracts: userContracts[0],
          });
        });
      });
    });
  })
});

//CREATE
router.post('/users', function(req, res, next) {
  dblib.validateUser(req.body.user).then(function () {
    dblib.createUser(req.body.user).then(function (result) {
      req.session.user = result._id;
      res.json(result);
    });
  }, function (errors) {
    res.json({user_id: req.params.userId, user: req.body.user, errors: errors});
  });
});

//UPDATE
router.post('/users/:userId', function(req, res, next) {
  dblib.findOneUser(req.params.userId).then(function (user) {
    dblib.updateUser(req.body.user, user.password).then(function (result) {
      res.json(result);
    })
  }, function(errors) {
    res.json({user_id: req.params.userId, user: req.body.user, errors: errors});
  });
});

//DELETE
router.post('/users/:userId/delete', auth.authorizeUser, function(req, res, next) {
  dblib.removeItemsByUser(req.params.userId).then(dblib.removeContractsByUser(req.params.userId))
  .then(dblib.removeUser(req.params.userId)).then(function () {
    req.session = null;
    res.json("deleted");
  });
});

//USER CONTRACTS
router.get('/contracts/:id/:type', function (req, res, next) {
  dblib.getUserContracts(req.params.id, req.params.type).then(function (results) {
    dblib.getUserContractItems(results)
    res.json(results);
  })
})

module.exports = router;
