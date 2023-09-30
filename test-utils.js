// Import necessary modules and functions for user creation and authentication

const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

async function createAdminUserAndAuthenticate() {
  try {
    // Create an admin user with the provided data
    const adminUserData = {
      username: 'adminuser',
      password: 'adminpassword',
      isAdmin: true,
      // Add other required fields as needed
    };

    // Create the admin user
    const adminUser = await User.create(adminUserData);

    // Generate a token for the admin user
    const token = jwt.sign(
      { username: adminUser.username, isAdmin: adminUser.isAdmin },
      SECRET_KEY
    );

    return token;
  } catch (error) {
    // Handle any errors that occur during user creation or token generation
    console.error('Error creating admin user:', error);
    throw error; // Rethrow the error to indicate failure
  }
}


// Export the functions
module.exports = {
  createAdminUserAndAuthenticate,
  createNonAdminUserAndAuthenticate,
};
