const router = require('express').Router();
const { Property } = require('../models');


router.get('/', async (req, res) => {
    const propertyData = await Property.findAll().catch((err) => { 
        res.json(err);
      });
        const properties = propertyData.map((properties) => properties.get({ plain: true }));
        console.log("YOURE ON THE RIGHT TRACK SOP!", properties);
        // res.render('property_dashboard', { properties });
      });

    module.exports = router;

    router.get('/property/:id', async (req, res) => {
        try{ 
            const propertyData = await property.findByPk(req.params.id);
            if(!propertyData) {
                res.status(404).json({message: 'No property with this id!'});
                return;
            }
            const property = propertyData.get({ plain: true });
            console.log("YOURE ON THE RIGHT TRACK SOP!", properties);

        //     res.render('property', property);
        //   } catch (err) {
        //       res.status(500).json(err);
        //   };     
      });
    
    module.exports = router;
