var express = require('express');
var router = express.Router();
var dblib = require('./../lib/categories_lib');

//INDEX
router.get('/categories', function (req, res, next) {
  dblib.getCategories().then(function (results) {
    res.json(results);
  })
});

//CREATE
router.post('/categories', function (req, res, next) {
  dblib.createCategory(req.body.category).then(function (result) {
    res.json(result);
  })
});

//DESTROY
router.post('/categories/:id/delete', function (req, res, next) {
  dblib.deleteCategory(req.params.id).then(function (result) {
    res.json("ok")
  })
})

module.exports = router;
