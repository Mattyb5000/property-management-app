const router = require('express').Router();
const { Tenant, Property } = require('../models');
const withAuth = require('../utils/auth');



// render all tenants
// router.get('/', withAuth, async (req, res) => {
  // router.get('/', async (req, res) => {
  //   try {
      // const propertyData = await Property.findAll({
        
      //   where: {
      //     landlord_id: req.session.user_id
      //   }
      // });

      // console.log(propertyData);
    //   let userId = req.session.user_id;

    //   const tenantData = await Tenant.findAll({
    //     include: [
    //       {
    //         model: Property,
    //         attributes: ['id', 'address', 'leaseEnd'],
    //       },
    //     ],
    //     where: {
    //       property_id: propertyData.id
    //     }
    //     }); 

    //     const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));

    //     // console.log("This is the right data", tenants);
    //     res.render('all_tenants', {
    //       tenants,
    //       loggedIn: req.session.loggedIn
    //     });

    //   } catch(err) { 
    //     console.log(err);
    //   }
    // });
        

  router.get('/', async (req, res) => {
    const tenantData = await Tenant.findAll({
        include: [
          {
            model: Property,
            attributes: ['address', 'leaseEnd'],
          },
        ],
      }).catch((err) => { 
        res.json(err);
      });
        const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));
        // console.log("This is the right data", tenants);
         res.render('all_tenants', {tenants});
});



// render view single tenant page
router.get('/:id', withAuth, async (req, res) => {
    const tenantData = await Tenant.findAll({
      where: {
          id: req.params.id
      },
    }).catch((err) => { 
        res.json(err);
      });
        const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));
        console.log("This is the right data", tenants);
         res.render('view_tenant', {tenants});
});






// render update tenant page
router.get('/update/:id', (req, res) => {
         res.render('update_tenant');
});


router.get('/create', (req, res) => {
  res.render('add_tenants');
});
module.exports = router;