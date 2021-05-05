const router = require('express').Router();
const { Property, User } = require('../models');
const withAuth = require('../utils/auth');


// Displays home page
router.get('/',  async (req, res) => {
  console.log('you are in homepage route');
  res.render('homepage');
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  
  if (req.session.loggedIn) {
    console.log("logged in");
    res.redirect('/property');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;