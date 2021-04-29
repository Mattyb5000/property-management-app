const router = require('express').Router();
const { Tenant } = require('../models');


//route to only display all tenants
router.get('/', async (req, res) => {
    const tenantData = await Tenant.findAll().catch((err) => { 
        res.json(err);
      });
        const tenants = tenantData.map((tenant) => tenant.get({ plain: true }));
        res.render('all', { tenant });
      });

      module.exports = router;