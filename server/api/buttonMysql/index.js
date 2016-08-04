'use strict';

var express = require('express');
var controller = require('./button.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

/*router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);*/

module.exports = router;
