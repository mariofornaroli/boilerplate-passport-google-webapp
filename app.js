const express = require('express');
const app = express();
const passport = require('passport');
app.use( passport.initialize());
app.use( passport.session());
const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const mongoose = require('mongoose');
const keys = require('./config/keys')

/* Set engine view */
app.set('view engine', 'ejs');

/* Connect to mongodb */
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('Connected to mongodb');
});

/* Set auth routes */
app.use('/auth', authRoutes);

/* Set main routes */
app.get('/', (req, res) => {
    res.render('home');
    return;
});


app.listen(3000, () => {
    console.log('listening for request on port 3000');
})