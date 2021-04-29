const router = require('express').Router(); //Router object 

const addProperty = require('./property/add_property');
const displayProperty = require('./display_property');
const propertyDashboard = require('./property_dashboard_route');

router.use('/property', addProperty);
router.use('/property', displayProperty);
router.use('/property', propertyDashboard);


module.exports = router;