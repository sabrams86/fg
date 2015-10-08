var express = require('express');
var router = express.Router();
var auth = require('./../lib/authorization');
var dblib = require('./../lib/items_lib');

//INDEX
router.get('/items', function (req, res, next) {
  dblib.getItems(res.locals.owner_id).then(function (results) {
    console.log(results);
    res.json(results);
  })
})
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
router.post('/items/:id', function (req, res, next) {
  dblib.updateItem(req.params.id, req.body.item).then(function (result) {
    res.json(result);
  }, function (err) {
    res.json(err);
  })
})

//DELETE
router.post('/items/:id/delete', function (req, res, next) {
  dblib.deleteItem(req.params.id).then(function (result) {
    res.json(result)
  });
})

module.exports = router;
