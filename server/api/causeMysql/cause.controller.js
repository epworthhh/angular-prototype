/*
'use strict';

var Cause = require('./causeMysql.model');
var config = require('../../config/environment');

var validationError = function(res, err) {
  return res.json(422, err);
};

*/
/**
 * Get list of Cause
 *//*

exports.index = function(req, res) {
  Cause.findAll().then(function(users) {
    res.json(200, users);
  });
};

*/
/**
 * Creates a new Cause
 *//*

exports.create = function (req, res, next) {
  Cause.create(req.body).success(function(err,cause) {
    console.log(cause.values)
  });
};

*/
/**
 * Get a single Cause by id
 *//*

exports.show = function (req, res, next) {
  Cause.find(req.params.id).then(function(err,cause) {
    if (!cause) return res.send(401);
    res.json(cause);
  });

};

*/
/**
 * Deletes a Button
 *//*

exports.destroy = function(req, res) {
  Cause.findAndDelete(req.params.id,function(err,result){
    if(err) return res.send(500, err);
    return res.send(204);
  });
};


*/
/**
 * Authentication callback
 *//*

exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
*/
