---
layout: ../../layouts/BlogPostLayout.astro
title: CSS Articles and Tools (September Edition)
date: 2022-09-30T22:41:09.000Z
categories: discoveries
image: /images/blog/generic/astronaut-in-space2.png
imageAlt: An astronaut making discoveries in space.
description: Several articles and tools for CSS.
---

I try to read a lot of development related articles and newsletters. I desire to
keep up with the latest trends to have a better understanding of the industry as
a whole. Here are a few articles and tools that I have discovered.

## [Creative list styling](https://web.dev/articles/creative-list-styling)

Michelle Barker writes an in-depth guide to the ubiquitous HTML list element.
The articles listed several features I wasn't aware of, like setting the starting
number for an ordered list. It also goes over various CSS options when using a list.
I highly recommend giving it a read if you ever work on HTML pages.

## [CSS container queries are finally here](https://ishadeed.com/article/container-queries-are-finally-here/)

If you follow anything CSS related, you have probably heard of CSS container queries.
They just recently dropped in Chrome and Safari. "It’s just how we used to write
CSS in media queries, but for a component level." This article explains how to
use container queries and why you would want to. Ahmad Shadeed also create a
[series of examples](https://lab.ishadeed.com/container-queries) using container
queries.

## [Flexbox Playground](https://flexbox.tech/)

Flexbox Playground is exactly what is says on the label. It is a playground to
understand how the different flexbox properties change the rendering of the
contained elements. CSS Tricks also has
[a guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/),
but Flexbox Playground lets you move things around in real time.

## [Not All Zeros are Equal](https://www.oddbird.net/2022/08/04/zero-units/)

I found this article to be an interesting read. It is not a scenario that I have
come across in my work, but never-the-less it is good to keep in mind if I ever
were to come across these issues. The bottom line from the article is, `0` is a
"number" and not a "length" and therefor you can not use a `0` and a "length" (ex: `5em`)
together in a `calc()` function.
