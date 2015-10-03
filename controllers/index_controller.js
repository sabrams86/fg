var dblib = require('./../lib/db_lib');

var index = function(req, res, next) {
  var query = req.query.category ? {categories: {$in: [req.query.category]}} : {};
  dblib.categoryQuery(query).then(function (items) {
    res.json(items);
  });
}

module.exports.index = index;
