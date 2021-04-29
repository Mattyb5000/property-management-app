const router = require('express').Router();
const { Tenant } = require('../../models');

//route to create a new tenant
router.post('/', async (req, res) => {
  try {
    const newtenant = await Tenant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newtenant);
  } catch (err) {
    res.status(400).json(err);
  }
});

//route to delete a tenant by id
router.delete('/:id', async (req, res) => {
    try {
      const tenantData = await Tenant.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!tenantData) {
        res.status(404).json({ message: 'No tenant found with this id!' });
        return;
      }
  
      res.status(200).json(tenantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;