const router = require('express').Router();
const { Property } = require('../../models');
// const withAuth = require('../../utils/auth');

// route to create a new property

router.post('/', async (req, res) => {
  try {
  const newProperty = await Property.create({
    ...req.body,
    landlord_id: req.session.user_id,
  });
  
    // Sends the updated book as a json response
    res.status(200).json(newProperty);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});
  

//route to delete a property by id
router.delete('/:id', async (req, res) => {
    try {
      const propertyData = await Property.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!propertyData) {
        res.status(404).json({ message: 'No property found with this id!' });
        return;
      }
  
      res.status(200).json(propertyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

    module.exports = router;