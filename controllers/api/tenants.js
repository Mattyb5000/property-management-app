const router = require('express').Router();
const { Tenant } = require('../../models');

router.post('/', async (req, res) => {
  console.log('you are in the post tenant api route');
  try {
    const newTenant = await Tenant.create({
      ...req.body,
      landlord_id: req.session.user_id,
    });

    // Sends the updated book as a json response
    res.status(200).json(newTenant);
    console.log('new tenant added');
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// route to update tenant
router.put('/:id', (req, res) => {
  console.log(req.body, req.params.id);
  Tenant.update(
    {
      phone_number: req.body.phone_number,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      emer_contact_name: req.body.emer_contact_name,
      emer_contact_phone: req.body.emer_contact_phone,
      landlord_id: req.body.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTenant) => {
      // Sends the updated book as a json response
      res.json(updatedTenant);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//route to delete a tenant by id
router.delete('/delete/:id', async (req, res) => {
  console.log('you are in router delete');
  try {
    const tenantData = await Tenant.destroy({
      where: {
        id: req.params.id,
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
