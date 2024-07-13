const { toHex } = require('../src/index')
const test = require('tape');

test('test hex creation', async (t) => {
  const result = toHex(1);
  t.ok(result == '0x01');
});
