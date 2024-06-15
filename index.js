import { test } from '@playwright/test';

function describe(title, callback) {
  return test.describe(title, callback);
}

function context(title, callback) {
  return test.describe(title, callback);
}

function it(title, callback) {
  return test(title, callback);
}

export { describe, context, it };
