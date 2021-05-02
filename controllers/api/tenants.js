const router = require('express').Router();
const { Tenant } = require('../../models');

//route to get all tenants
// router.get('/', async (req, res) => {
//     const tenantData = await Tenant.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const tenants = tenantData.map((tenant) => tenant.get({ plain: true }));
//         res.render('all', { tenants });
//       });

//       //route to get one tenant
//       router.get('/:id', async (req, res) => {
//         try{ 
//             const tenantData = await tenant.findByPk(req.params.id);
//             if(!tenantData) {
//                 res.status(404).json({message: 'No tenant with this id!'});
//                 return;
//             }
//             const tenant = tenantData.get({ plain: true });
//             res.render('tenants', tenant);
//           } catch (err) {
//               res.status(500).json(err);
//           };     
//       });
    
      // const router = require('express').Router();
// const { tenant } = require('../../models');


// route to update tenant
router.put('/:id', (req, res) => {
  Tenant.update(
    {
      phone_number: req.body.phone_number,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      emer_contact_name: req.body.emer_contact_name,
      emer_contact_phone: req.body.emer_contact_phone,
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
    .catch((err) => res.json(err));
});







//route to create a new tenant
router.post('/', async (req, res) => {
  try {
    const newTenant = await tenant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTenant);
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