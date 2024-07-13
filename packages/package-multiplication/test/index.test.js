const { mulToHex } = require('../src/index')
const test = require('tape');

test('test multiplication to hex', async (t) => {
  const result = mulToHex(2, 2);
  t.ok(result == '0x04');
});
