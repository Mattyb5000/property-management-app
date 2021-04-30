const router = require('express').Router(); //Router object 

const allTenants = require('./all_tenants');
const updateTenant = require('./update_tenant');
const viewTenant = require('./view_tenant');

router.use('/alltenant', allTenants);
router.use('/updatetenant', updateTenant);
router.use('/viewtenant', viewTenant);


module.exports = router;