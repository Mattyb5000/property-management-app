const sequelize = require('../config/connection');
const seedUsers = require('./users');
const seedProperties = require('./properties');
const seedTenants = require('./tenants');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedProperties();

  await seedTenants();

  process.exit(0);
};

seedAll();

