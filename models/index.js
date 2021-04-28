const Property = require('./properties');
const Tenant = require('./tenants');
const User = require('./users');

User.hasMany(Property, {
  foreignKey: 'landlord_id',
});

Property.belongsTo(User, {
  foreignKey: 'landlord_id',
});

Property.hasMany(Tenant, {
    foreignKey: 'property_id',
});
  
Tenant.belongsTo(Property, {
    foreignKey: 'property_id',
});

module.exports = { User, Property, Tenant };
