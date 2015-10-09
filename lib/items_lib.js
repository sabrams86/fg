var db = require('./../models');
var Validator = require('./../lib/validator');
var bcrypt = require('bcryptjs');

var fn = module.exports;

fn.getUserItems = function (user) {
  return db.Items.find({userId: user});
}
fn.getItems = function (query) {
  return db.Items.find(query);
}
fn.createItem = function (item, user) {
  return db.Items.create({
    name: item.name,
    description: item.description,
    brand: item.brand,
    datePurchased: item.datePurchased,
    condition: item.condition,
    description: item.description,
    imageUrl: item.imageUrl,
    userId: item.userId,
  });
}
fn.updateItem = function (itemId, item, categories) {
  return db.Items.findByIdAndUpdate(itemId, {
    name: item.name,
    description: item.description,
    brand: item.brand,
    datePurchased: item.datePurchased,
    condition: item.condition,
  });
}
fn.getItem = function (itemId) {
  return db.Items.findById(itemId);
}
fn.deleteItem = function (itemId) {
  return db.Items.findByIdAndRemove(itemId);
}



fn.removeItemsByUser = function (userId) {
  return db.Items.remove({userId: userId});
}
fn.validateItem = function (item) {
  return new Promise(function (success, failure) {
    var validate = new Validator;
    var categories = item.categories.split(',');
    categories.pop();
    validate.exists(item.name, 'Please add a name for this piece of gear');
    validate.exists(item.description, 'Description cannot be blank');
    validate.exists(item.datePurchased, 'Please estimate how old the item is');
    validate.exists(item.condition, 'Condition cannot be blank');
    if(validate._errors.length > 0){
      failure(validate._errors);
    } else {
      success();
    }
  })
}



fn.removeContractsByItem = function (item) {
  return db.Contracts.remove({itemId: item});
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

fn.updateItem = function (itemId, item, categories) {
  return db.Items.findByIdAndUpdate(itemId, {
    name: item.name,
    description: item.description,
    brand: item.brand,
    datePurchased: item.datePurchased,
    condition: item.condition,
    imageUrl: item.imageUrl,
    categories: categories,
  });
}

fn.getItemsByUser = function (user) {
  return db.Items.find({userId: user});
}
