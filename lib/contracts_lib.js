var db = require('./../models');
var Validator = require('./../lib/validator');
var bcrypt = require('bcryptjs');

var fn = module.exports;
fn.removeContractsByUser = function (userId) {
  return db.Contracts.remove({$or: [{sellerId: userId}, {buyerId: userId}]});
}
fn.removeContractsByItem = function (item) {
  return db.Contracts.remove({itemId: item});
}
fn.getContract = function (contractId) {
  return db.Contracts.findById(contractId);
}
fn.approveContract = function (contract) {
  return db.Contracts.findByIdAndUpdate(contract, { status: 'approved'});
}

fn.deleteContract = function (contract) {
  return db.Contracts.findByIdAndRemove(contract);
}

fn.validateContract = function (contract, user) {
  return new Promise(function (success, failure) {
    var validate = new Validator;
    validate.exists(startDate, 'Please enter a start date');
    validate.exists(endDate, 'Please enter an end date');
    if(validate._errors.length > 0){
      failure(validate._errors);
    } else {
      success();
    }
  })
}

fn.createContract = function (contract, user, locals) {
  return db.Contracts.create({
    itemId: contract.itemId,
    renterId: contract.renterId,
    ownerId: contract.ownerId,
    startDate: contract.startDate,
    endDate: contract.endDate,
    status: contract.status,
  });
}

fn.updateContract = function (contractId, contract) {
  return db.Contracts.findByIdAndUpdate(contractId, {
    startDate: contract.endDate,
    endDate: contract.endDate
  });
}
fn.makeCategoryList = function (userCategories) {
  var categorylist = '';
  userCategories.forEach(function (e) {
    categorylist += (e._id + ',');
  });
  return categorylist;
}

fn.getContractsByUser = function (userId) {
  return db.Contracts.find({$or: [{sellerId: userId}, {buyerId: userId}]});
}

fn.getUserContractItems = function (contracts) {
  var itemIds = contracts.map(function (e) {
    return e.itemId;
  })
  return db.Items.find({_id: {$in: itemIds}});
}

fn.sortUserContracts = function (contracts, rentalItems, user) {
  var sellerContracts = [];
  var buyerContracts = [];
  contracts.forEach(function (contract) {
    if(contract.sellerId === user) {
      rentalItems.forEach(function (rentalItem) {
        if (rentalItem._id.toString() === contract.itemId){
          contract.item = rentalItem;
        }
      })
      sellerContracts.push(contract);
    } else {
      rentalItems.forEach(function (rentalItem) {
        if (rentalItem._id.toString() === contract.itemId) {
          contract.item = rentalItem;
        }
      })
      buyerContracts.push(contract);
    }
  })
  return [buyerContracts, sellerContracts];
}
