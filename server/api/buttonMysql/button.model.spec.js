'use strict';

var should = require('should');
var app = require('../../app');
var Button = require('./button.model');

var button = new Button({
  button_type: 'local',
  meeting_date: new Date(),
  button_lat: 40,
  button_long: 41
});

