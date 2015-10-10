var express = require('express');
var router = express.Router();
var auth = require('./../lib/authorization');
var dblib = require('./../lib/items_lib');

//INDEX
router.get('/items', function (req, res, next) {
  var query = {};
  if (req.query.category) {
    var query = {categories: {$in: [req.query.category]}};
  }
  dblib.getItems(query).then(function (results) {
    res.json(results);
  })
})
//INDEX
router.get('/user_items', function (req, res, next) {
  dblib.getUserItems(res.locals.owner_id).then(function (results) {
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
