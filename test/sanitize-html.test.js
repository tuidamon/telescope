// Test for sanitize html

const sanitizeHTML = require('../src/sanitize-html');

test('Tests for sanitized HTML', async () => {
  const data = await sanitizeHTML.run('<img onerror="alert(1)">');
  expect(data).toBe('<img>');
});
