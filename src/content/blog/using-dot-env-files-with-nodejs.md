---
layout: ../../layouts/BlogPostLayout.astro
title: "Using dot env files with Node.js"
date: 2023-09-07 11:01:55 -0400
categories: nodejs tutorials
image: /images/blog/nodejs-dot-env.png
imageAlt: The words DOT ENV on a code editor
description: Manage your environment variables with Node.js
---

Environment variables, or env vars for short, are commonly used to store configuration
and secrets for use with a program. Separating configuration lets programmers
avoid hardcoding values like database credentials into a program's code. Having
them separate also helps avoid publishing secrets to repositories.

## Table of contents

## How to use Environment Variables in Node.js

With Node.js you can easily access env vars by using
[`process.env`](https://nodejs.org/docs/latest-v20.x/api/process.html#processenv).
For example, this script will print whatever is in the `DB_PASSWORD` variable:

```javascript
console.log(process.env.DB_PASSWORD);
```

You can run this script in a variety of different ways:

```bash
$ node example.js
undefined

$ DB_PASSWORD=foo node example.js
food

$ export DB_PASSWORD=bar
$ node example.js
bar
```

As shown in the above example, if not set the value in `process.env` will be undefined.
Many times it will be useful to set a default as with the below example:

```javascript
const password = process.env.DB_PASSWORD || 'password';
console.log(password);
```

## Storing Environment Variables in .env Files

Rather than having to specify each environment variable on the command line before
running a script, env vars can be placed in a `.env` file. This can be very helpful
when dealing with a large number of variables.

`.env` files are generally specified in the "ini" format which looks like this:

```bash
API_KEY=abcd

# Database config
DB_PASSWORD=foo
DB_USER=root
```

## Loading .env Files in Node.js 20.6 and Above

As of [Node.js version 20.6.0](https://nodejs.org/en/blog/release/v20.6.0), Node
will load a `.env` file for you. Pass the [`--env-file`](https://nodejs.org/docs/latest-v20.x/api/cli.html#--env-fileconfig)
to `node` along with a `.env` file and the contents of the file will be loaded
into `process.env`.

```bash
$ node --env-file=.env example.js
```

## Loading .env Files in Node.js 20.5 and Below

Prior to Node.js version 20.6.0, you need to use an NPM package to load `.env` files
into `process.env` (or roll your own!). One of the more popular packages is
[`dotenv`](https://www.npmjs.com/package/dotenv), which can be installed by running
`npm install dotenv`. Then you just need to import the `dotenv` package and it will
automatically find and parse your `.env` file. For example:

```javascript
require('dotenv').config();
console.log(process.env.DB_PASSWORD);
```

## Other Tools & Resources

When working on a large project with many team members and/or many environment variables
it may become necessary to use a configuration and secrets manager. The one currently
being used at my job is [EnvKey](https://envkey.com/). EnvKey makes it simple to
manage credentials and configurations for multiple different environments and
manage access to those credentials. There are other options out there, EnvKey
just happens to be the tool that I am most familiar with.