const passport = require('passport');
const passlocal = require('passport-local');
const connection = require('./database');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const User = connection.User;


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id, (err, user) => {

    });
});

// Local Stratagy
passport.use(
    new LocalStratagy({usrnameFeild: "username"}, (username, password, done) => {
        user.findOne({username: username}).then(user => {
            // Create new user
            if (!user) {
                const newUser = new User({ username, password});
                // Hash Password
                const passHash = bcrypt.hashSync(newUser.password, saltRounds);

                if (passHash) {
                    newUser.password = passHash;

                    newUser.save().then(user => {
                        return done(null, user);
                    }).catch(err => {
                        return done(null, false, {message: err});
                    })
                }
            } else {
                bcrypt.compare(password, newUser.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Password Invalid"})
                    }
                }).catch(err => {
                    return done(null, false, {message: err});
                });
            }
        });
    })
);

module.exports = passport;