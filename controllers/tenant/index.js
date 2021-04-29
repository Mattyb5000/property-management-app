const router = require('express').Router(); //Router object 

const allTenants = require('./all_tenants');
const updateTenant = require('./update_tenant');
const viewTenant = require('./view_tenant');

router.use('/tenant', allTenants);
router.use('/tenant', updateTenant);
router.use('/tenant', viewTenant);


module.exports = router;