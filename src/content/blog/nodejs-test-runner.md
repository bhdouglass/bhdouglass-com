---
layout: ../../layouts/BlogPostLayout.astro
title: "Node.js Test Runner"
date: 2023-05-13 22:45:36 -0400
updatedDate: 2023-05-16 21:29:44 -0400
categories: nodejs tutorials
image: /images/blog/nodejs-test-runner.png
imageAlt: An example test suite using the Node.js Test Runner
description: Learn how to test JavaScript using the Node.js Test Runner
---

Node.js is a popular runtime environment for building server-side applications
using JavaScript. Testing is an essential part of any software development process,
and the release of [Node.js 20](../node-20) brings an exciting update for developers.
Node.js 20 promotes the built-in [Test Runner](https://nodejs.org/api/test.html)
from experimental to stable.

In this tutorial, we'll take a closer look at the now-stable Test Runner, from
installation to running tests and generating reports.

So, let's get started and see how you can use the Node.js [Test Runner](https://nodejs.org/api/test.html).

## Table of Contents

## Getting Started with the Test Runner

To use the stable Test Runner you will need to [download version 20](https://nodejs.org/en/download)
from [nodejs.org](https://nodejs.org/) or your favorite Node.js version manager.
(Check out [Volta](https://volta.sh/)!)

Now you can run tests by using the `--test` cli flag:

```bash
node --test
```

## Writing Tests

Before running the Test Runner, you will need to write some actual tests.
The essential test functions can be imported from the `node:test` module.
**Note: There is no `test` module, you have to use `node:test`.**

```javascript
const { describe, test } = require('node:test');
```

### test()

The [`test()` function](https://nodejs.org/api/test.html#testname-options-fn)
sets up an individual test. The first argument is a descriptive name for the test.
The second argument is a function that performs the actual test.
The tested function can be either a normal function or an asynchronous function.

### describe()

The [`describe()` function](https://nodejs.org/api/test.html#describename-options-fn)
set ups up a suite of tests. A describe block can have many different tests inside
of it and is meant to group together related tests. A describe block can also
be used to set up and tear down tests using hooks.

The first argument to `describe()` is the name of the suite. The second argument
is a function that contains one or more `test()` functions.

### it() vs test()

There is a shorthand for the `test()` function called [`it()`](https://nodejs.org/api/test.html#itname-options-fn).
`it()` is simply an alias for `test()`, so it does exactly the same thing and takes
exactly the same parameters.

So then, why use one over the other?

The difference is readability, as a [Stack Overflow answer](https://stackoverflow.com/a/56072272)
states. When using `it()`, the tendency is to read it as part of the test name.
So `it('should do this thing')` is read as: "It should do this thing".

It really just comes down to personal preference. As long as you are consistent
in your test files no one should complain too much.

### Assertions

Now that you have tests you'll want to make sure that your code produces expected
results. That is where the `assert` built-in module shines.

The `assert` module has many different types of asserts, but the one most commonly
used is the [`assert.equal()`](https://nodejs.org/api/assert.html#assertequalactual-expected-message) function.
As with most of the `assert` functions, `assert.equal()` takes two arguments,
the actual value and the expected value. There is also a third optional message.
`assert.equal()` will compare the actual and expected value and throws an error
if they are not equal. When using "strict mode" (recommend!) this will use strict
equality (`===`) rather than regular equality (`==`) in "legacy mode".

To use assertions in your tests (in "strict mode") use the following example.

```javascript
const assert = require('node:assert/strict');

assert.equal(1, 1); // True
assert.equal(1, '1'); // False
assert.equal(1, {}); // False
```

### Example Test

```javascript
// example.test.js

const { describe, test } = require('node:test');
const assert = require('node:assert/strict');

// The function to test (normally this would be in a different file)
function compare(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Not a number');
  }

  if (a > b) {
    return 1;
  }
  else if (a < b) {
    return -1;
  }

  return 0;
}

// The test suite
describe('compare()', () => {
  test('Returns a 1 when a is greater than b', () => {
    const result = compare(2, 1);
    assert.equal(result, 1);
  });

  test('Returns a -1 when a is less than b', () => {
    const result = compare(1, 2);
    assert.equal(result, -1);
  });

  test('Returns a 0 when a equals b', () => {
    const result = compare(1, 1);
    assert.equal(result, 0);
  });

  test('Throws an error when one of the inputs is not a number', () => {
    assert.throws(() => compare('test', 1));
  });
});
```

## How Does Node Find Tests?

By default, the Test Runner will recursively search the current directory for
any of the following files:

- All `*.js`, `*.cjs`, and `*.mjs` files in directories called `test`.
- All files named "test". Example: `test.js`
- All files starting with "test-". Example: `test-something.cjs`
- All files ending with ".test", "-test", or "_test": Examples: `something.test.js`, `something-test.cjs`, `something_test.mjs`

### Limiting the Tests

Testing a large code base can sometimes be a time-consuming process. if you want
to limit the test files being run, just pass them as arguments to `node --test`.

Alternatively, you can use [`--test-name-pattern`](https://nodejs.org/api/test.html#filtering-tests-by-name)
to filter to just specific tests by regex pattern. For example:
`node --test --test-name-pattern="regex \w+"`

At the time of writing, it appears that the filtering only works on top-level tests
and doesn't work on subtests. See [this GitHub issue](https://github.com/nodejs/node/issues/46728)
for a potential solution in a future release of Node.js.

Within a test file, you can also filter and limit tests using
[`describe.skip()`](https://nodejs.org/api/test.html#describeskipname-options-fn),
[`test.skip()`](https://nodejs.org/api/test.html#testskipname-options-fn),
[`it.skip()`](https://nodejs.org/api/test.html#itskipname-options-fn),
[`describe.only()`](https://nodejs.org/api/test.html#describeonlyname-options-fn),
[`test.only()`](https://nodejs.org/api/test.html#testonlyname-options-fn),
and [`it.only()`](https://nodejs.org/api/test.html#itonlyname-options-fn).
These work just like the
standard `describe()` and `it()` functions as detailed above. The key difference
is that the `skip` variant will not run the test and the `only` variant will
restrict the Test Runner to only running that test or suite.

Before [version 20.2.0](https://nodejs.org/en/blog/release/v20.2.0) `test.skip()`
and `test.only()` were not available. If you prefer using `test()` over `it()`,
make sure you are on the latest version of Node.js!

### TODO tests

Not ready to implement a test yet, but you know ahead of time what you want to test?
Then use
[`describe.todo()`](https://nodejs.org/api/test.html#describetodoname-options-fn),
[`test.todo()`](https://nodejs.org/api/test.html#testtodoname-options-fn),
and [`it.todo()`](https://nodejs.org/api/test.html#ittodoname-options-fn).
These mark the tests as TODO so you can
come back to them later. This can be useful when working on other tests as the
number of TODO tests is printed in the output, reminding you to get back to them.

Before [version 20.2.0](https://nodejs.org/en/blog/release/v20.2.0) `test.todo()`
was not available. If you prefer using `test()` over `it()`, make sure you are on
the latest version of Node.js!

## Hooks

Hooks are a great way to reuse common set up and tear down processes. Hooks come in
several different flavors:

- [`before()`](https://nodejs.org/api/test.html#beforefn-options) - Executes a function before a test suite
- [`beforeEach()`](https://nodejs.org/api/test.html#beforeeachfn-options) - Executes a function before each test in a suite
- [`afterEach()`](https://nodejs.org/api/test.html#aftereachfn-options) - Executes a function after each test in a suite
- [`after()`](https://nodejs.org/api/test.html#afterfn-options) - Executes a function after a test suite

Each hook takes a function as an argument and evaluates it during the lifecycle
as described above. This will be relative to the `describe()` block that the hooks
are in. This makes it possible to execute multiple hooks depending if you have nested
`describe()` blocks.

Example:

```javascript
const { describe, it, before, beforeEach, afterEach, after } = require('node:test');

describe('some test suite', () => {
  before(() => {
    // Do some one-time set up, like opening a database connection
  });

  beforeEach(() => {
    // Do some set up before each test, like resetting mocks
  });

  afterEach(() => {
    // Do some tear down after each test, like cleaning up the database
  });

  after(() => {
    // Do some one-time tear down, like shutting down a server
  });
});
```

## Mocking

With the integrated test runner there is the ability to
[mock functions and object methods](https://nodejs.org/api/test.html#mocking).
Mocking can be a very handy tool, especially when testing error-handling
code and external api code.

To get started with mocking, you need to import the `mock` object from `node:test`.
Then you can use [`mock.fn()`](https://nodejs.org/api/test.html#mockfnoriginal-implementation-options)
to mock a function. The first argument is the original function and the second argument
is an optional implementation. Used without an implementation `mock.fn()` can be
used to see if a function has been called (a "spy" in other testing frameworks).
Used with an implementation and you can change the behavior of the original function.

The other function to know is [`mock.method()`](https://nodejs.org/api/test.html#mockmethodobject-methodname-implementation-options).
`mock.method()` takes an object as its first argument, with the second being the name
of the method. You can also provide a third argument as a replacement implementation
function. As with `mock.fn()` having the implementation allows you to change the
behavior and not having the implementation allows you to check if it has been called.

When you are done with a mock you can run [`mock.restoreAll()`](https://nodejs.org/api/test.html#mockrestoreall)
to restore the original functionality and resets the function call history for each mock.
Use this in a `beforeEach()` or `afterEach()` hook to reuse mocks across multiple tests.

Example (Modified from the Node.js Docs):

```javascript
const { test, mock } = require('node:test');
const assert = require('node:assert/strict');

test('spies on an object method', (t) => {
  const number = {
    value: 5,
    subtract(a) {
      return this.value - a;
    },
  };

  mock.method(number, 'subtract');
  assert.equal(number.subtract.mock.calls.length, 0);
  assert.equal(number.subtract(3), 2);
  assert.equal(number.subtract.mock.calls.length, 1);

  const call = number.subtract.mock.calls[0];

  assert.deepEqual(call.arguments, [3]);
  assert.equal(call.result, 2);
  assert.equal(call.error, undefined);
  assert.equal(call.target, undefined);
  assert.equal(call.this, number);
});
```

## Test Reporters

When using the Test Runner, by default the tests are reported in a human-readable
way. This is called the `spec` [test reporter](https://nodejs.org/api/test.html#test-reporters).
There are two other test reporters in addition to `spec`. They are `tap`, which
prints out a report in the "Test Anything Protocol", and `dot`, which prints out
successful tests as a dot and failures with an "x".

To change between formats use the `--test-reporter` flag. For example:
`node --test --test-reporter dot`

There is also the option of creating a [custom test reporter](https://nodejs.org/api/test.html#custom-reporters).
But that is outside of the scope of this blog post.

## Watch Mode

If you want to automatically retry a test whenever a file is changed, you can use
[watch mode](https://nodejs.org/api/test.html#watch-mode). It is currently experimental in Node.js 20,
but you can use it with the `--watch` flag. For example: `node --test --watch`

Watch mode will continue running until you explicitly stop it, using the `CTRL + C`
keyboard shortcut.

## Code Coverage

Another experimental feature (in Node.js 20) that you can use today, is
[code coverage](https://nodejs.org/api/test.html#collecting-code-coverage).
Enable it via the `--experimental-test-coverage` flag. This will print out
a summary of covered after printing the test results. For example:
`node --test --experimental-test-coverage`

## Conclusion

In conclusion, the new stable Test Runner in Node.js 20 is a valuable addition
for developers who want to test without much overhead. By following this tutorial,
you should now have a solid understanding of how to use the Test Runner to its
full potential.

Happy testing!

## Further Reading

- [Node.js Test Runner docs](https://nodejs.org/api/test.html)
- [Node.js Test CLI docs](https://nodejs.org/api/cli.html#--test)
- [Node.js Assert docs](https://nodejs.org/api/assert.html)
- [Node.js Mocks docs](https://nodejs.org/api/test.html#mocking)
- [Learn How to Build a Custom Test Reporter Using Node.js’ New Native Test Runner](https://www.nearform.com/blog/writing-a-node-js-test-reporter/) - An article going over test reporters and how to build your own custom reporter.