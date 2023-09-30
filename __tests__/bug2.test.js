const jwt = require('jsonwebtoken'); 
const { SECRET_KEY } = require('../config');
const app = require('../app'); 
const request = require('supertest');


it('should return 401 Unauthorized for expired tokens', async function () {
  // Create an expired token
  const token = jwt.sign({ username: 'testuser' }, 'expired_secret', { expiresIn: '0s' });

  // Send a request with the expired token
  const res = await request(app)
    .get('/users')
    .set('authorization', `Bearer ${token}`);

  // Expect a 401 status code
  expect(res.statusCode).toEqual(401);
});

