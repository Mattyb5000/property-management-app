const router = require('express').Router();
const { Property, User } = require('../models');
const withAuth = require('../utils/auth');

//property_dashboard route--displays all properties

router.get('/', withAuth, async (req, res) => {
  try {
    console.log('entered property router');
    
    const userData = await User.findByPk(req.session.user_id);

    console.log(userData);
    const propertyData = await Property.findAll({
      where: {
        landlord_id: userData
      }
    });
     
    console.log("this is the propertyData");
    console.log(propertyData);
      
    const properties = propertyData.map((properties) =>
    properties.get({ plain: true }));
  
    console.log("these are the mapped properties");
    console.log( properties);

    res.render('property_dashboard', { 
      properties,
    loggedIn: req.session.loggedIn
    
  });

  } catch (err) {
    console.log(err);
    }
  });
  
// render add property page
router.get('/update', withAuth, (req, res) => {
  res.render('add_property');
});


// route to view a single property on display_property
router.get('/:id', withAuth, async (req, res) => {
  try {
    const propertyData = await Property.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_id'],
        },
      ],
    });

    const property = propertyData.get({ plain: true });
    res.render('display_property', {
      property,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});

// // router.get('/property', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Property }],
//     });

//     const user = userData.get({ plain: true });

// //     res.render('property', {
// //       ...user,
// //       logged_in: true
// //     });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

module.exports = router;
