const request = require('supertest');
const app = require('../app'); 
const User = require('../models/user'); 
const db = require('../db')

  /// TESTS BUG #4
it('should update user data correctly', async function () {
  const updatedUser = await User.update('$1', { first_name: 'UpdatedFirstName', last_name: 'UpdatedLastName' });
  expect(updatedUser).toBeDefined();
  expect(updatedUser.username).toBe('testuser');
  expect(updatedUser.first_name).toBe('UpdatedFirstName');
  expect(updatedUser.last_name).toBe('UpdatedLastName');
  expect(updatedUser.email).toBe('testuser@test.com');
  expect(updatedUser.phone).toBe('123-456-7890');
});


/**
// FIXES BUG #4
router.delete('/:username', authUser, requireLogin, async function(
  req,
  res,
) {
  const currentUser = req.user;
  const usernameToDelete = req.params.username;

  // Check if the current user is an admin
  if (!currentUser.isAdmin) {
    return res.status(403).json({ error: "You are not authorized to delete other users." });
  }

  // Check if the user is trying to delete their own account
  if (currentUser.username === usernameToDelete) {
    return res.status(400).json({ error: "You cannot delete your own account." });
  }

  try {
    // Delete the user account
    const deletedUser = await User.findOneAndRemove({ username: usernameToDelete });

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json({ message: "User deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error." });
  }
});*/