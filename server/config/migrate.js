'use strict'


var config = require('./environment');
var Schema = require('./schema');
var sequence = require('when/sequence');
var _ = require('lodash');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : config.mysql.host,
    user     : config.mysql.username,
    password : config.mysql.password,
    database : config.mysql.database,
    charset  : 'utf8'
  }
});
var bookshelf = require('bookshelf')(knex);

function createTable(tableName) {
  return knex.schema.createTable(tableName, function (table) {
    var column;
    var columnKeys = _.keys(Schema[tableName]);
    _.each(columnKeys, function (key) {
      if (Schema[tableName][key].type === 'text' && Schema[tableName][key].hasOwnProperty('fieldtype')) {
        column = table[Schema[tableName][key].type](key, Schema[tableName][key].fieldtype);
      }
      else if (Schema[tableName][key].type === 'string' && Schema[tableName][key].hasOwnProperty('maxlength')) {
        column = table[Schema[tableName][key].type](key, Schema[tableName][key].maxlength);
      }
      else {
        column = table[Schema[tableName][key].type](key);
      }
      if (Schema[tableName][key].hasOwnProperty('nullable') && Schema[tableName][key].nullable === true) {
        column.nullable();
      }
      else {
        column.notNullable();
      }
      if (Schema[tableName][key].hasOwnProperty('primary') && Schema[tableName][key].primary === true) {
        column.primary();
      }
      if (Schema[tableName][key].hasOwnProperty('unique') && Schema[tableName][key].unique) {
        column.unique();
      }
      if (Schema[tableName][key].hasOwnProperty('unsigned') && Schema[tableName][key].unsigned) {
        column.unsigned();
      }
      if (Schema[tableName][key].hasOwnProperty('references')) {
        column.references(Schema[tableName][key].references);
      }
      if (Schema[tableName][key].hasOwnProperty('defaultTo')) {
        column.defaultTo(Schema[tableName][key].defaultTo);
      }
    });
  });
}


function createTables () {
  var tables = [];
  var tableNames = _.keys(Schema);
  tables = _.map(tableNames, function (tableName) {
    return function () {
      return createTable(tableName);
    };
  });
  return sequence(tables);
}

function insertUser (user) {
  var User = bookshelf.Model.extend({
    tableName: 'users'
  });

  User.forge(user).save()
    .then(function(new_user) {
      console.log('User created!! ', new_user);
    });

}



var User = bookshelf.Model.extend({
  tableName: 'users'
});



new User()
  .fetch()
  .then(function(model) {
    console.log('Tables already created');
  }).otherwise(function (error) {
    createTables()
      .then(function () {
        console.log('Tables created!!');
        var user = {
          name: 'Carlos',
          username: 'Carlos89',
          email: 'test@test.com',
          password: 'test',
          user_lat: 0,
          user_long: 0
        }
        insertUser(user);
      }).otherwise(function (error) {
        throw error;
      });
  });
