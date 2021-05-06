const Property = require('./property');
const Tenant = require('./tenant');
const User = require('./user');

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

User.hasMany(Tenant, {
  foreignKey: 'landlord_id',
});

Tenant.belongsTo(User, {
  foreignKey: 'landlord_id',
});

module.exports = { User, Property, Tenant };
