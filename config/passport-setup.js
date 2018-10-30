const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user);
    //done(null, user.id);
});

passport.deserializeUser((userObj, done) => {
    done(null, userObj);
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: 'http://localhost:3000/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },
        (accessToken, refreshToken, profile, done) => {
            // passport callback function
            console.log('callback passport called');
            console.log('username: ' + profile.displayName);
            console.log('googleId: ' + profile.id);

            //done();
            done(null, {id : profile.id, username: profile.displayName});

            /* Take information from profile and store them in our db */
            // new User({
            //     username: profile.displayName,
            //     googleId: profile.id
            // })

            // User.findOne({ googleId: profile.id }).then((currentUser) => {
            //     if (currentUser) {
            //         /* User already existing in our db */
            //         console.log('user is: ' + currentUser);
            //         done(null, currentUser);
            //     } else {
            //         /* User not existing in our db */
            //         new User({
            //             username: 'aaaaaaa',
            //             googleId: 'bbbbb'
            //         }).save().then((newUser) => {
            //             console.log('New User saved to db');
            //             console.log(newUser);
            //             done(null, newUser);
            //         }).catch((err) => {
            //             console.log('Arror adding New User to db');
            //             console.log(err);
            //         });
            //     };
            // });


        })
);