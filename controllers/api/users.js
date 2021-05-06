const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  console.log(req.body);
  console.log("you're in api user / to create a post");

  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      
      // req.session.user_id = userData.id;
      req.session.user_id = userData.user_id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
      console.log("You made it through the sign-in user route");
    });
    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    console.log("you made it to the /login user route.");
    const userData = await User.findOne({
      where: {
        email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      console.log('Im in req.session.save');
      req.session.user_id = userData.user_id;
      req.session.loggedIn = true;
      console.log(userData.user_id);
      console.log(req.session.user_id);


      res.json({ user: userData, message: 'You are now logged in!' });
      // res
      //   .status(200)
      //   .json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});




// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  console.log('You made it to the logout function');
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
// req.session.user_id = userData.id; 
module.exports = router;