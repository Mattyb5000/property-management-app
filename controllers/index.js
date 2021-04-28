const router = require('express').Router();

// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.get('/', (req, res) => {
    res.send("Connection has been made!")
})
module.exports = router;