var LocalStrategy = require("passport-local").Strategy;

var mysql = require('mysql2');
var bcrypt = require('bcrypt');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = (passport) => {
 passport.serializeUser((user, done) =>{
  done(null, user.id);
 });

 passport.deserializeUser((id, done) =>{
  connection.query("SELECT * FROM admingonnadoit WHERE id = ? ", [id],
   (err, rows) =>{
    done(err, rows[0]);
   });
 });


 passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    // Find the user with the given email address
    connection.query('SELECT * FROM admingonnadoit WHERE email = ?', [email], (err, results) => {
      if (err) { return done(err); }
      if (!results.length) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      const user = results[0];
      // Compare the provided password with the hashed password in the database
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store the hash in your password DB.
            bcrypt.compare(password, hash, (err, isMatch) => {
              if (err) { return done(err); }
              if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
              }
              return done(null, user);
            });
        });
      });
    });
  }
));

};