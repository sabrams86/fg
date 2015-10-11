var express = require('express');
var router = express.Router();
var auth = require('./../lib/authorization');
var dblib = require('./../lib/contracts_lib');

//SHOW
router.get('/contracts/:contractId', function (req, res, next) {
  dblib.getContract(req.params.contractId).then(function (contract) {
    res.json(contract);
  });
});


//CREATE
router.post('/contracts', function (req, res, next) {
  dblib.createContract(req.body.contract).then(function (result) {
    res.json(result);
  })
});

//EDIT
router.get('/contracts/:contractId/edit', auth.contractMember, function (req, res, next) {

});

//UPDATE
router.post('/contracts/:contractId', auth.contractMember, function (req, res, next) {

});

//DELETE
router.post('/contracts/:contractId/delete', function (req, res, next) {
  dblib.deleteContract(req.params.contractId).then(function () {
    res.json('OK');
  })
});

//APPROVE
router.post('/contracts/:contractId/approve', function (req, res, next) {
  dblib.approveContract(req.params.contractId).then(function () {
    res.json('OK');
  })
});

module.exports = router;
