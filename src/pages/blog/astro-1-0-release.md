---
layout: ../../layouts/BlogPostLayout.astro
title: "Astro 1.0 Release"
date: 2022-08-23 16:45:38 -0400
categories: astro
---

Astro [recently announced](https://astro.build/blog/astro-1/) that it had released
version 1.0. Astro is a static site generator that focuses on performance and
shipping minimal JavaScript to the browser. It has a novel
["island architecture"](https://docs.astro.build/en/concepts/islands/)
where you can partially hydrate a page with interactivity.
In fact, Astro is the very thing generating this blog. I wrote about my initial
experience with Astro in [a post earlier this year](/blog/built-with-astro/).

Just a few days before the release, I started upgrading this website from v0.22
to the latest release candidate. The [migration guide](https://docs.astro.build/en/migrate/)
was very thorough and I was able to avoid anything painful. The biggest change
came from the fact that the RSS feed generation was moved from the `getStaticPaths`
function to a separate module. I believe this is a smart move and would allow
developers to easily build RSS feeds for things unrelated to pages. For example,
this could serve to create topic-specific RSS feeds for a blog.

In my previous post, I mentioned that I had run into some issues using `getStaticPaths`.
[After reading the docs](https://docs.astro.build/en/reference/api-reference/#getstaticpaths),
I found out that the `getStaticPaths` function is run in an isolated scope, and
therefore cannot access any variables outside of that scope. The exception to this
is any imports that are made in that same file. I use some constants defined
in a different file to reuse some strings between the page and the `getStaticPaths`
function.

If you want to learn more about Astro, the best place to start is [astro.build](https://astro.build/).
There is also an "Awesome List" for Astro: [github.com/one-aalam/awesome-astro](https://github.com/one-aalam/awesome-astro).
The creator of Astor, Fred K. Schott, appeared on the JS Party podcast to talk
about the release of Astro 1.0 and its unique architecture. Listen to
[episode #238](https://changelog.com/jsparty/238) for that talk.
