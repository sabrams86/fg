var db = require('./../models');
var Validator = require('./../lib/validator');
var bcrypt = require('bcryptjs');

var fn = module.exports;

fn.addReservation = function (itemId, reservation) {
  return db.Items.findByIdAndUpdate(itemId, {$push:
    {reservedDates: {$each: reservation}}
  });
}
fn.updateAvailability = function (itemId, dates) {
  return db.Items.findByIdAndUpdate(itemId, {
    $push: {reservedDates: {$each: dates}},
  }).then(function () {
    return db.Items.findByIdAndUpdate(itemId, {
      $push: {unAvailability: {$each: dates}},
    })
  })
}

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
    city: item.city,
    state: item.state,
    zip: item.zip,
    price: item.price,
    categories: item.categories,
    imageUrl: item.imageUrl,
    userId: item.userId,
  });
}
fn.updateItem = function (itemId, item) {
  return db.Items.findByIdAndUpdate(itemId, {
    name: item.name,
    description: item.description,
    brand: item.brand,
    price: item.price,
    categories: item.categories,
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
