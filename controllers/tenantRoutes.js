const router = require('express').Router();
const { Tenant, Property } = require('../models');
const withAuth = require('../utils/auth');

// render all tenants
// router.get('/', withAuth, async (req, res) => {
router.get('/', async (req, res) => {
  console.log('you are in tenantRoutes');
  try {
    const tenantData = await Tenant.findAll({
      include: [
        {
          model: Property,
          attributes: ['id', 'address', 'leaseEnd', 'landlord_id'],
        },
      ],
      where: {
        landlord_id: req.session.user_id,
      },
    });

    const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));

    res.render('all_tenants', {
      tenants,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
  }
});

// render view single tenant page
// router.get('/:id', withAuth, async (req, res) => {



//render add tenants page
router.get('/create/:id', async (req, res) => {
  console.log('you are in the create tenant route');
  try {
    const propertyData = await Property.findByPk(req.params.id);
 
    const property = propertyData.get({ plain: true });
    console.log('this is property with new tenant');
    console.log(property);
    res.render('add_tenants', { property }); 
      
  } catch (err) {
    console.log(err);
 
    res.status(500).json(err);
  }
 });

 router.get('/:id', async (req, res) => {
  try {
    const tenantData = await Tenant.findByPk(req.params.id, {
      include: [
        {
          model: Property,
          attributes: ['address', 'leaseEnd'],
        },
      ],
    });
    
    const tenant = tenantData.get({ plain: true });
    console.log('this is tenant ' , tenant);

    res.render('view_tenant', { 
      tenant,
      logged_in: req.session.logged_in
     });
  } catch (err) {
    console.log(err);
 
    res.status(500).json(err);
  }
 });


// render update tenant page
router.get('/update/:id', (req, res) => {
  res.render('update_tenant');
});

module.exports = router;