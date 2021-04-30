const router = require('express').Router();
const { Tenant } = require('../../models');

// Need this to render display data - ST
router.get('/:id', async (req, res) => {
      try {
        // Find the logged in user based on the session ID
      //   const userData = await User.findByPk(req.session.user_id, {
      //     attributes: { exclude: ['password'] },
      //     include: [{ model: Project }],
      //   });
    
      //   const user = userData.get({ plain: true });
    
        res.render('view_tenant', {
        
          banana: 'potato',
          id: req.params.id,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });
    
      module.exports = router;