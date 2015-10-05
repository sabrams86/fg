var db = require('./../models');
var Validator = require('./../lib/validator');

var fn = module.exports;

fn.categoryQuery = function (query) {
  return db.Items.find(query);
}
fn.getCategories = function () {
  return db.Categories.find({});
}
fn.createCategory = function (name, parent) {
  return db.Categories.create({name: name, parent: parent});
}
fn.validateCategory = function (category) {
  return new Promise(function (success, failure) {
    var validate = new Validator;
    validate.exists(category, 'Please enter a category');
    if(validate._errors.length > 0) {
      failure(validate._errors);
    } else {
      success();
    }
  });
}
fn.getItemCategories = function (item) {
  return db.Categories.find({_id: {$in: item.categories}});
}
fn.makeCategoryList = function (userCategories) {
  var categorylist = '';
  userCategories.forEach(function (e) {
    categorylist += (e._id + ',');
  });
  return categorylist;
}
