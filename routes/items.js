var express = require('express');
var router = express.Router();
var auth = require('./../lib/authorization');
var dblib = require('./../lib/items_lib');

//ADD RESERVATION
router.post('/items/:id/reserve', function (req, res, next) {
  dblib.addReservation(req.params.id, req.body).then(function (result) {
    res.json(result);
  }, function (err) {
    res.json(false);
  })
});

//update UNAVAILABILITY
router.post('/items/:id/unavailable', function (req, res, next) {
  dblib.updateAvailability(req.params.id, req.body).then(function (result) {
    res.json(result);
  }, function (err) {
    res.json(false);
  })
});

//INDEX
router.get('/items', function (req, res, next) {
  var queryArray = [];
  if (req.query.category) {
    queryArray.push({categories: {$in: [req.query.category]}});
  }
  if (req.query.startDate) {
    queryArray.push({startDate: {$in: [req.query.startDate]}});
  }
  if (req.query.endDate) {
    queryArray.push({endDate: {$in: [req.query.endDate]}});
  }
  if (req.query.location) {
    queryArray.push({zip: {$in: [req.query.location]}});
  }
  if (queryArray.length > 0) {
    var query = {$and: queryArray};
  } else {
    var query = {};
  }
  console.log(query);
  dblib.getItems(query).then(function (results) {
    res.json(results);
  })
})
//User Index
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
