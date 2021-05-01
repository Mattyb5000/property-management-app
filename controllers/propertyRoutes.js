const router = require('express').Router();
const { Property, User } = require('../models');

//property_dashboard route--displays all properties

router.get('/', async (req, res) => {
    const propertyData = await Property.findAll().catch((err) => { 
        res.json(err);
      });
        const properties = propertyData.map((properties) => properties.get({ plain: true }));
        console.log("YOURE ON THE RIGHT TRACK SOP!", properties);
        // res.render('property_dashboard', { properties });
    // }
      });

    // route to add_view a single property on display_property

    router.get('/:id', async (req, res) => {
        try {
          const propertyData = await Property.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: [
                  'id'
                ],
              },
            ],
          });
      
          const property = propertyData.get({ plain: true });
          console.log ("WE REAAAAAAAAAAAAAAAADY!!!!!", property);
        //   res.render('display_property', { property });
        } catch (err) {
          console.log(err);
         
          res.status(500).json(err);
        }
      });

      router.get('/property', withAuth, async (req, res) => {
        try {
          // Find the logged in user based on the session ID
          const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
          });
      
          const user = userData.get({ plain: true });
      
          res.render('property', {
            ...user,
            logged_in: true
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });

      module.exports = router;