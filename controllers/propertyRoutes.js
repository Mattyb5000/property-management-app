const router = require('express').Router();
const { Property, User } = require('../models');
// const withAuth = require('../utils/auth');

//property_dashboard route--displays all properties

router.get('/',  async (req, res) => {
  try {
    const propertyData = await Property.findAll({
      where: {
        landlord_id: req.session.user_id
      }
    });
      
    const properties = propertyData.map((properties) =>
    properties.get({ plain: true }));
  
    res.render('property_dashboard', { 
      properties,
    loggedIn: req.session.loggedIn
    
  });

  } catch (err) {
    console.log(err);
    }
  });
  
// render add property page
// router.get('/update', withAuth, (req, res) => {
  router.get('/update',  (req, res) => {
  res.render('add_property');
});


// route to view a single property on display_property
// router.get('/:id', withAuth, async (req, res) => {
  router.get('/:id',  async (req, res) => {
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
    console.log(property.id);
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});

module.exports = router;
