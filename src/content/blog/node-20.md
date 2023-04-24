---
layout: ../../layouts/BlogPostLayout.astro
title: "Node 20"
date: 2023-04-23 20:51:59 -0400
categories: nodejs
image: /images/blog/logos/nodejs-logo.svg
imageAlt: Node.js' logo
description: The latest release of Node.js is out now with some cool new features.
---

Node.js recently announced that [version 20](https://nodejs.org/en/blog/announcements/v20-release-announce) has been released.

It was only a few months ago that [Node.js 19](../node-19) was released. But this
release improves upon 19 with performance improvements and new features.

A headline feature of Node.js 20 is the experimental [permission model](https://nodejs.org/api/permissions.html#permission-model).
By default, a Node.js process has unrestricted access to the filesystem and other
features like child processes. With the new
[`--experimental-permission`](https://nodejs.org/api/cli.html#--experimental-permission)
flag you can enable the new permission model.
Then you can use flags like
[`--allow-fs-read`](https://nodejs.org/api/cli.html#--allow-fs-read) and
[`--allow-child-process`](https://nodejs.org/api/cli.html#--allow-child-process)
to give granular permissions to a given process.

For more details, check out the [permission model docs](https://nodejs.org/api/permissions.html#permission-model).

The other notable feature of Node.js 20 is the now-stable [test runner](https://nodejs.org/api/test.html).
The test runner offers basic testing features like those of [Jest](https://jestjs.io/)
and [Mocha](https://mochajs.org/). These features include `describe` and `it`/`test`
functions, mocks, and parallel test execution.

I do not believe that the Node.js test runner will replace Jest and Mocha, but rather
it will give a lightweight option when needed.

Node.js version 20 will become the next LTS release of Node.js in October 2023.
At the time of writing, the current LTS is [Node.js 18](https://nodejs.org/en/download).

## Further Reading

- [Node.js version 20 release announcement](https://nodejs.org/en/blog/announcements/v20-release-announce)
- [Full version 20 changelog](https://github.com/nodejs/node/releases/tag/v20.0.0)
- [Node.js Test Runner docs](https://nodejs.org/api/test.html)
- [Node.js Permission Model](https://nodejs.org/api/permissions.html#permission-model)
