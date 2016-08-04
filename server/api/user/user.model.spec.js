'use strict';

var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var user = new User({
  username: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password',
  user_lat : 40,
  user_long : 41
});
