'use strict';
var config = require('../../config/environment');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  var bookshelf = req.app.get('bookshelf');

  var User = bookshelf.Model.extend({
    tableName: 'users'
  });

  new User()
    .fetch()
    .then(function(user) {
      if (!user) return res.send(401);
      res.json(user);
    }).otherwise(function (err) {
      res.send(500, err);
    });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var bookshelf = req.app.get('bookshelf');

  var User = bookshelf.Model.extend({
    tableName: 'users'
  });

  User.forge(req.body).save()
    .then(function(user) {
      res.json(user);
    }).otherwise(function(err){
      res.send(500, err);
    });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {

  var bookshelf = req.app.get('bookshelf');

  var User = bookshelf.Model.extend({
    tableName: 'users'
  });

  new User({'id':req.params.id})
    .fetch()
    .then(function(user) {
      if (!user) return res.send(401);
      res.json(user);
    }).otherwise(function (err) {
      res.send(500, err);
    });
};


/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {

  var bookshelf = req.app.get('bookshelf');

  var User = bookshelf.Model.extend({
    tableName: 'users'
  });

  new User({'id':req.params.id})
    .fetch()
    .destroy()
    .then(function() {
      res.send(200);
    }).otherwise(function (err) {
      res.send(500, err);
    });



};
