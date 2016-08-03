'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/hb_session'
  },
  mysql: {
    host:  'localhost',
    database: 'hb_dev',
    username: 'helpbuttons',
    password: 'hb'
  },

  seedDB: false
};
