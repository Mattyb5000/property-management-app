const router = require('express').Router();
const { Tenant } = require('../models');


// render all tenants
router.get('/', async (req, res) => {
    const tenantData = await Tenant.findAll().catch((err) => { 
        res.json(err);
      });
        const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));
        console.log("This is the right data", tenants);
         res.render('all_tenants', {tenants});
});



// render view tenant





// render update tenant



module.exports = router;