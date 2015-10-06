var express = require('express');
var router = express.Router();
var auth = require('./../lib/authorization');
var dblib = require('./../lib/db_lib');

//NEW
router.get('/contracts/new', function (req, res, next) {

});

//SHOW
router.get('/contracts/:contractId', auth.contractMember, function (req, res, next) {

});

//EDIT
router.get('/contracts/:contractId/edit', auth.contractMember, function (req, res, next) {

});

//CREATE
router.post('/contracts', function (req, res, next) {

});

//UPDATE
router.post('/contracts/:contractId', auth.contractMember, function (req, res, next) {

});

//DELETE
router.post('/contracts/:contractId/delete', auth.contractMember, function (req, res, next) {

});
//APPROVE
router.post('/contracts/:contractId/approve', auth.contractMember, function (req, res, next) {

});

module.exports = router;
