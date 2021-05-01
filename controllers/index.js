const router = require('express').Router(); //Router object 

const apiRoutes = require('./api');
const propertyRoutes = require('./propertyRoutes');
const tenantRoutes = require('./tenantRoutes');
const homeRoutes = require('./homeRoutes')

// router.use('/', homeRoutes);
router.use('/property', propertyRoutes);
router.use('/tenant', tenantRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;