var express = require('express');
var router = express.Router();
var dblib = require('./../lib/db_lib');

router.get('/', function (req, res, next) {
  res.json('{}');
});

module.exports = router;
