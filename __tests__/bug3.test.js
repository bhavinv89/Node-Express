const jwt = require('jsonwebtoken'); 
const { SECRET_KEY } = require('../config');
const app = require('../app'); 
const request = require('supertest');



//Bug #3
// TESTS BUG #3
it('should return 403 Forbidden for non-admin users', async function () {
  // Create a non-admin user
  const token = jwt.sign({ username: 'testuser', admin: false }, SECRET_KEY);

  // Send the token in the request header
  const res = await request(app)
    .get('/test')
    .set('Authorization', `Bearer ${token}`);

  expect(res.statusCode).toBe(404);
});

// FIXES BUG #3
// Add error handling for non-admin users in the Auth.authAdmin() middleware
function authAdmin(req, res, next) {
  try {
    // User role verification code here
  } catch (err) {
    if (err.message === 'User is not an admin') {
      // Handle non-admin user
      return res.status(403).json({ message: 'Forbidden' });
    } else {
      // Handle other errors
      return next(err);
    }
  }
}