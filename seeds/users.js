const { User } = require('../models');

const userData = [
  {
    email: 'jimmibean@email.com',
    password: 'password1',
  },
  {
    email: 'bigbird@email.com',
    password: 'password2',
  },
  {
    email: 'tigerwoods@email.com',
    password: 'password3',
  },
  {
    email: 'bushdid911@email.com',
    password: 'password4',
  },
  {
    email: 'stevo@email.com',
    password: 'password5',
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
