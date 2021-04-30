const router = require('express').Router(); //Router object 

const apiRoutes = require('./api');
const propertyRoutes = require('./property');
const tenantRoutes = require('./tenant');

// router.use('/', homeRoutes);
router.use('/property', propertyRoutes);
router.use('/tenant', tenantRoutes);
router.use('/api', apiRoutes);

module.exports = router;