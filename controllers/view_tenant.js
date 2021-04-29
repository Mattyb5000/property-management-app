const router = require('express').Router();
const { Tenant } = require('../models');

    //route to get one tenant
    router.get('/:id', async (req, res) => {
        try{ 
            const tenantData = await Tenant.findByPk(req.params.id);
            if(!tenantData) {
                res.status(404).json({message: 'No tenant with this id!'});
                return;
            }
            const tenant = tenantData.get({ plain: true });
            res.render('properties', tenant);
          } catch (err) {
              res.status(500).json(err);
          };     
      });
    
      module.exports = router;