var express = require('express');
var router = express.Router();
var dblib = require('./../lib/db_lib');

//INDEX
router.get('/categories', db.index);

//CREATE
router.post('/categories', db.create);

module.exports = router;
