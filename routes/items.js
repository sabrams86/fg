var express = require('express');
var router = express.Router();
var auth = require('./../lib/authorization');
var dblib = require('./../lib/items_lib');

//INDEX

//NEW

//SHOW
router.get('/items/:id', function (req, res, next) {
  dblib.getItem(req.params.id).then(function (result) {
    res.json(result);
  }, function (err) {
    res.json(err);
  })
})
//EDIT

//CREATE
router.post('/items', function (req, res, next) {
  dblib.createItem(req.body.item).then(function (result) {
    res.json(result);
  }, function (err) {
    res.json(err);
  })
})

//UPDATE

//DELETE
router.post('/items/:id/delete', function (req, res, next) {
  dblib.deleteItem(req.params.id).then(function (result) {
    res.json(result)
  });
})

module.exports = router;
