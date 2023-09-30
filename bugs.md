Bankly App Bugs

Bug #1:

Explanation:
The User.getAll() method in the models/user.js file does not take in any arguments, but the method signature has username and password as parameters which are not being used in the method. This could lead to potential security issues as sensitive information like passwords could be inadvertently exposed.
Test that catches the bug:
// TESTS BUG #1
it('should not allow username and password as arguments', function () {
  expect(() => User.getAll('username', 'password')).toThrow();
});
Fix for the code:
// FIXES BUG #1
// Remove the unnecessary username and password parameters from the method signature
static async getAll() {
  // Method implementation here
}

Bug #2:
// TESTS BUG #2
it('should return 401 Unauthorized for expired tokens', async function () {
  // Create an expired token
  const token = jwt.sign({ username: 'testuser' }, 'expired_secret', { expiresIn: '0s' });

  // Send the expired token in the request header
  const res = await request(app)
    .get('/test')
    .set('Authorization', `Bearer ${token}`);

  expect(res.statusCode).toBe(401);
});

// FIXES BUG #2
// Add error handling for expired tokens in the Auth.authUser() middleware
function authUser(req, res, next) {
  try {
    // Token verification code here
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      // Handle expired token
      return res.status(401).json({ message: 'Unauthorized' });
    } else {
      // Handle other errors
      return next(err);
    }
  }
}

Bug #3:
// TESTS BUG #3
it('should return 403 Forbidden for non-admin users', async function () {
  // Create a non-admin user
  const token = jwt.sign({ username: 'testuser', admin: false }, SECRET_KEY);

  // Send the token in the request header
  const res = await request(app)
    .get('/test')
    .set('Authorization', `Bearer ${token}`);

  expect(res.statusCode).toBe(403);
});
Fix for the code:
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



Bug #4:

test("should import ExpressError successfully", function() {
  expect(ExpressError).toBeDefined();
});

Fix #4
const ExpressError = require('../helpers/expressError');
}