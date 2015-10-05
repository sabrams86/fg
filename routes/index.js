var express = require('express');
var router = express.Router();
var dblib = require('./../lib/db_lib');

router.get('/', db.index);

module.exports = router;
