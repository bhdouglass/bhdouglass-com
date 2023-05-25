---
layout: ../../layouts/BlogPostLayout.astro
title: "NPM Basics"
date: 2022-02-28 09:58:11 -0500
updatedDate: 2023-05-24 22:42:52 -0400
categories: nodejs links
image: /images/blog/logos/nodejs-logo.svg
imageAlt: Node.js' logo
description: Tips and resources for getting started with NPM and Package.json.
---

[NodeSource](https://nodesource.com/) has recently released a 3-part blog series
about NPM basics. This is a good resource for developers new to NPM and the package.json
format. But it is a good refresher for experienced developers as well. I believe
it is important to get back to the basics sometimes. I've also learned a few things
from these articles.

The first post is: "[The Basics: Getting started with npm](https://nodesource.com/blog/the-basics-getting-started-with-npm)".
It goes over initializing a node project with NPM, installing dependencies, installing
dev dependencies, and installing modules globally. One new thing I picked up was the
`npm init --yes` command. This instantly generates a package.json without any inputs.
Combine this with settings in your `.npmrc` file for the best experience. Here is an example
of the configuration I have already been using:

```plaintext
init-author-name=Brian Douglass
init-author-email=bhdouglass@gmail.com
init-author-url=https://bhdouglass.com/
init-license=GPL-3.0
init-version=0.0.1
```

Check out the [NPM docs](https://docs.npmjs.com/cli/v8/using-npm/config#init-author-email)
for further information about the `.npmrc` file options.

The second post is: "[The Basics of Package.json](https://nodesource.com/blog/the-basics-of-package-json)".
This goes over most of the parts of a package.json file, including dependencies
and metadata-related fields. If you are interested in the full package.json schema,
read more on the [NPM docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

The final post is: "[Understanding dependencies inside your Package.json](https://nodesource.com/blog/understanding-dependencies-inside-your-packagejson)".
It gives a brief overview of the various lesser-known dependency options. This includes
PeerDependencies, OptionalDependencies, and BundledDependencies. Additionally,
it goes over some of the host-related fields in a package.json file.

Check out the [NodeSource Blog](https://nodesource.com/blog) and subscribe to their
[RSS feed](https://nodesource.com/blog/rss) for more articles about Node.js!

## Further Reading

- [NPM Docs](https://docs.npmjs.com/)
- [The Basics: Getting started with npm](https://nodesource.com/blog/the-basics-getting-started-with-npm)
- [The Basics of Package.json](https://nodesource.com/blog/the-basics-of-package-json)
- [Understanding dependencies inside your Package.json](https://nodesource.com/blog/understanding-dependencies-inside-your-packagejson)
