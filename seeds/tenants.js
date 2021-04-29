const { tenants } = require('../models');

const tenantData = [
  {
    phone_number: '706-528-3645',
    email: 'boblazzar@email.com',
    // lease_end: '01-01-2022',//*!!!!!!!!!! How to connect this to property
    first_name: 'Bob',
    last_name: 'Lazzar',
    property_id: 1,
  },
  {
    phone_number: '706-528-8956',
    email: 'debralazzar@email.com',
    // lease_end: '',
    first_name: 'Debra',
    last_name: 'Lazzar',
    property_id: 1,
  },
  {
    phone_number: '625-489-3289',
    email: 'greg@email.com',
    // lease_end: '',
    first_name: 'Gregory',
    last_name: 'Wilberton',
    property_id: 2,
  },
  {
    phone_number: '402-838-9241',
    email: 'nimblelizzard@email.com',
    // lease_end: '',
    first_name: 'Ernest',
    last_name: 'Ebenstein',
    property_id: 3,
  },
  {
    phone_number: '845-956-7345',
    email: 'crispyquail@email.com',
    // lease_end: '',
    first_name: 'Tiger',
    last_name: 'Woods',
    property_id: 4,
  },
  {
    phone_number: '409-765-3636',
    email: 'crazycricket@email.com',
    // lease_end: '',
    first_name: 'William',
    last_name: 'Thornsburg',
    property_id: 5,
  },
];

const seedTenants = () => tenants.bulkCreate(tenantData);

module.exports = seedTenants;