const router = require('express').Router(); //Router object 

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const addProperty = require('./add_property');
const allTenants = require('./all_tenants');
const displayProperty = require('./display_property');
const propertyDashboard = require('./property_dashboard_route');
const updateTenant = require('./update_tenant');
const viewTenant = require('./view_tenant');

router.use('/', homeRoutes);
router.use('/property', addProperty);
router.use('/tenant', allTenants);
router.use('/property', displayProperty);
router.use('/property', propertyDashboard);
router.use('/tenant', updateTenant);
router.use('/tenant', viewTenant);
router.use('/api', apiRoutes);

module.exports = router;