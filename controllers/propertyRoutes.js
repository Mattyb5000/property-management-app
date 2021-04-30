const router = require('express').Router();
const { Property, User } = require('../models');

//property_dashboard route

router.get('/', async (req, res) => {
    const propertyData = await Property.findAll().catch((err) => { 
        res.json(err);
      });
        const properties = propertyData.map((properties) => properties.get({ plain: true }));
        console.log("YOURE ON THE RIGHT TRACK SOP!", properties);
        // res.render('property_dashboard', { properties });
    }
      });

//     module.exports = router;

    //route to add_property

    router.get('/:id', async (req, res) => {
        try {
          const propertyData = await Property.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: [
                  'id',
                  'email',
                  'password',
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

      module.exports = router;