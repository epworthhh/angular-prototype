/*
'use strict';

var Button = require('./buttonMysql.model');
var config = require('../../config/environment');

var validationError = function(res, err) {
  return res.json(422, err);
};

*/
/**
 * Get list of Buttons
 *//*

exports.index = function(req, res) {
  Button.findAll().then(function(users) {
    res.json(200, users);
  });
};

*/
/**
 * Creates a new Button
 *//*

exports.create = function (req, res, next) {
  Button.create(req.body).success(function(err,button) {
    console.log(button.values)
  });
};

*/
/**
 * Get a single Button by id
 *//*

exports.show = function (req, res, next) {
  Button.find(req.params.id).then(function(err,button) {
    if (!button) return res.send(401);
    res.json(button);
  });

};

*/
/**
 * Deletes a Button
 *//*

exports.destroy = function(req, res) {
  Button.findAndDelete(req.params.id,function(err,result){
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
