var express = require('express');
var router = require('express').Router();
var passport = require('passport')

// The root route renders our only view
router.get('/', function(req, res) {
  console.log(req.user);
  res.render('index', { user: req.user });
});


// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/splash');
});

router.get('/splash', function (req,res,next) {
  res.render('splash', { user: req.user })
})



module.exports = router;
