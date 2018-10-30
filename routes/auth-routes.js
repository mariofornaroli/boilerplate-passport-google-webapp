const router = require('express').Router();
const passport = require('passport');


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    // handle with passport

    res.send('logging out');
});

// router.get('/google', (req, res) => {
//     // handle with passport

//     res.send('logging with google');
// });

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // handle with passport
    let retStr = '<div>Here there are some info from your social login:</div> ';
    retStr += '<div><i>googleId: ' + req.user.id + '</i></div>';
    retStr += '<div><i>username: ' + req.user.username + '</i></div>';
    res.send(retStr);
    //console.log(req.user)
});

router.get('/google/redirect',
    passport.authenticate('google'), // complete the authenticate using the google strategy
    (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
        console.log('passed by the redirect url specified')
        if (err.name === 'TokenError') {
            res.redirect('/auth/google'); // redirect them back to the login page
        } else {
            // Handle other errors here
        }
    },
    (req, res) => { // On success, redirect back to '/'
        res.redirect('/');
    }
);

module.exports = router;