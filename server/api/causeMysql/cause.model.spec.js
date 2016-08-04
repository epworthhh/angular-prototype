'use strict';

var should = require('should');
var app = require('../../app');
var Cause = require('./cause.model');

var cause = new Cause({
  cause_label: 'my cause',
  goal: 100,
  needed_points: 100
});

