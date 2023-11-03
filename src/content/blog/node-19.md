---
layout: ../../layouts/BlogPostLayout.astro
title: "Node 19"
date: 2022-10-25 20:06:47 -0400
updatedDate: 2023-06-07 22:35:58 -0400
categories: nodejs
image: /images/blog/logos/nodejs-logo.svg
imageAlt: Node.js' logo
description: The latest release of Node.js is out now with some cool new features.
---

Update: Version 19 has reached its [end of life](https://github.com/nodejs/Release?#end-of-life-releases), check out [Node.js 20](../node-20/)!

Last week Node.js announced the [release of version 19](https://nodejs.org/en/blog/announcements/v19-release-announce).

While it is not an LTS release, it does come with a really cool feature: `--watch`.

Using the `--watch` flag, you can have Node.js automatically restart the process
if the files being watched change. Running Node.js in watch mode is as Running
`node --watch index.js`. If you are using more than one file in your project,
you can also use the `--watch-path` [flag](https://github.com/nodejs/node/blob/main/doc/api/cli.md#--watch-path).

The `--watch-path` flag can be specified multiple times to watch different directories.
One important thing to note is, `--watch` works on all platforms while `--watch-path` only
works on macOS and Windows at this time. Linux users will get an `ERR_FEATURE_UNAVAILABLE_ON_PLATFORM`
error. While this feature does overshadow projects like [nodemon](https://nodemon.io/),
I am sure that nodemon will continue to distinguish itself with features beyond
what Node.js offers.

This release of Node.js includes other items, like
a stable WebCrypto API and an updated V8 engine. Check out the
[release blog post](https://nodejs.org/en/blog/announcements/v19-release-announce/)
for all the other details.
