 // TESTS BUG #1
it('should not allow username and password as arguments', function () {
  expect(() => User.getAll('username', 'password')).toThrow();
});


