const timeWord = require('./timeWord');

// Test cases for timeToWords function
describe('#timeToWords', () => {
  test('00:00 should return "midnight"', () => {
    expect(timeWord.timeToWords('00:00')).toBe('midnight');
  });

  test('00:12 should return "twelve twelve am"', () => {
    expect(timeWord.timeToWords('00:12')).toBe('twelve twelve am');
  });

  test('01:00 should return "one o’clock am"', () => {
    expect(timeWord.timeToWords('01:00')).toBe('one o’clock am');
  });

  test('06:01 should return "six oh one am"', () => {
    expect(timeWord.timeToWords('06:01')).toBe('six oh one am');
  });

  test('06:10 should return "six ten am"', () => {
    expect(timeWord.timeToWords('06:10')).toBe('six ten am');
  });

  test('06:18 should return "six eighteen am"', () => {
    expect(timeWord.timeToWords('06:18')).toBe('six eighteen am');
  });

  test('06:30 should return "six thirty am"', () => {
    expect(timeWord.timeToWords('06:30')).toBe('six thirty am');
  });

  test('10:34 should return "ten thirty four am"', () => {
    expect(timeWord.timeToWords('10:34')).toBe('ten thirty four am');
  });

  test('12:00 should return "noon"', () => {
    expect(timeWord.timeToWords('12:00')).toBe('noon');
  });

  test('12:09 should return "twelve oh nine pm"', () => {
    expect(timeWord.timeToWords('12:09')).toBe('twelve oh nine pm');
  });

  test('23:23 should return "eleven twenty three pm"', () => {
    expect(timeWord.timeToWords('23:23')).toBe('eleven twenty three pm');
  });
});
