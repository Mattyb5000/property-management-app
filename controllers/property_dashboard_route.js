const router = require('express').Router();
const { Property } = require('../models');

//route to get all properties
router.get('/', async (req, res) => {
    const propertyData = await Property.findAll().catch((err) => { 
        res.json(err);
      });
        const properties = propertyData.map((property) => property.get({ plain: true }));
        res.render('all', { properties });
      });

      //route to get one property
      router.get('/:id', async (req, res) => {
        try{ 
            const propertyData = await Property.findByPk(req.params.id);
            if(!propertyData) {
                res.status(404).json({message: 'No Property with this id!'});
                return;
            }
            const property = propertyData.get({ plain: true });
            res.render('properties', property);
          } catch (err) {
              res.status(500).json(err);
          };     
      });
    
    module.exports = router;