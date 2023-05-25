---
layout: ../../layouts/BlogPostLayout.astro
title: "Astro 2.5 Release"
date: 2023-05-23 15:43:46 -0400
categories: astro
image: /images/blog/astro/astro-logo-banner.svg
imageAlt: Astro's Logo
description: Astro's 2.5 release rolls out with many new features.
---

[Astro](../astro/), the innovative static site builder, has recently [released version 2.5](https://astro.build/blog/astro-250/),
bringing a range of exciting updates and enhancements to its already impressive features.
This blog post serves as a comprehensive summary of the key highlights and improvements
in Astro version 2.5. From enhanced performance optimizations to new features
and improved developer experience, Astro continues to solidify its position as a
leading choice for building fast and efficient static websites. So let's take a
look at what's new in Astro version 2.5!

## Table of Contents

## Data Collections

Content Collections were [introduced in 2.0](../astro-2-0-release), now in version
2.5 Astro has added Data Collections. Data Collections live alongside content
in the `src/content` directory. These will typically be JSON or YAML files.

What makes Data Collections different that just importing a data file on your own?
Data Collections, like Content Collections, can be validated to match a specified
schema which provides type safety when using the data in your pages.

Data Collections are differentiated from Content Collections by passing
`type: "data"` to the `defineCollection()` function.

Data and Content Collections can now reference one another via the new `reference()`
function. For example, this can be useful for tasks like linking an author
to a blog post.

Example Data Collection config:

```javascript
import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string().url(),
  }),
});

export const collections = { authors };
```

For further details, read the [Astro guide on Content Collections](https://docs.astro.build/en/guides/content-collections/).

## Static-by-default Hybrid Rendering

In [Astro 2.0](../astro-2-0-release), they released [Hybrid Rendering](https://docs.astro.build/en/guides/server-side-rendering/#hybrid-rendering).
The new static pre-rendering by default option flips normal Hybrid Rendering on
its head by pre-rendering all but a select few pages. This differs from Hybrid
Rendering's default which only pre-renders a select few pages.

To enable this new (experimental) option, you will need to add the following to
your Astro config file:

```javascript
export default defineConfig({
  output: 'hybrid',
  experimental: {
    hybridOutput: true,
  },
});
```

Then, to disable pre-rendering a page, add `export const prerender = false;`
to the front matter of any `.astro` file.

This can be very useful for sites that have mostly static content with a few
pages that change frequently.

## HTML Minification

Looking to reduce the size of your site's files? Then turn on the new HTML
minification by adding `compressHTML: true` to your Astro config file.

Now you don't need to rely on external tools or extra build steps to accomplish
minifications.

## Parallelized Rendering

Speed up your build times with the new Parallelized Rendering in your `.astro`
files. Previously each component would be rendered in order, waiting while a
particularly blocking component held up the rest of the page. Now Astro
will render each component in parallel, greatly improving rendering time.

## Other Changes

Astro 2.5 also has support for experimental custom client directives and
a new polymorphic type helper. Head over to the [Astro blog](https://astro.build/blog/astro-250/)
for more details.

## Further Reading

- [Astro 2.5 Release Announcement](https://astro.build/blog/astro-250/)
- [Astro 2.5 Full Changelog](https://github.com/withastro/astro/pull/7090)
- [Astro Public Roadmap](https://github.com/orgs/withastro/projects/11/views/1)
- [Astro 2.0 Release](../astro-2-0-release)
