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

router.get('/view', async (req, res) => {
    const tenantData = await Tenant.findAll({
        where: {
            id: req.params.userbutton //TODO change value later
        }
    }).catch((err) => { 
        res.json(err);
      });
        const tenants = tenantData.map((tenants) => tenants.get({ plain: true }));
        console.log("This is the right data", tenants);
         res.render('view_tenant', {tenants});
});



// render update tenant



module.exports = router;