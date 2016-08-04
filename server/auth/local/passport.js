var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var config = require('../../config/environment');
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

var User = bookshelf.Model.extend({
  tableName: 'users'
});

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      /*User.findOne({
        email: email.toLowerCase()
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: 'This email is not registered.' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.' });
        }
        return done(null, user);
      });*/

      new User({'email' : email })
        .fetch()
        .then(function(user) {

          if (!user) return done(null, false, { message: 'This email is not registered.' });

          if (!user.authenticate(password)) {
            return done(null, false, { message: 'This password is not correct.' });
          }

          return done(null, user);

        }).otherwise(function (err) {
          return done(err);
        });
    }
  ));
};
