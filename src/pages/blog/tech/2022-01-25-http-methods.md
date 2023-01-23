---
layout: ../../../layouts/BlogPostLayout.astro
title: "HTTP Methods"
date: 2022-01-25 22:55:21 -0500
categories: web
---

Recently I have been reading ["Design and Build Great Web APIs"](https://pragprog.com/titles/maapis/design-and-build-great-web-apis/) by Mike Amundsen. And in there is a brief section
about HTTP methods. Most people are probably familiar with the standard REST methods
of `GET`, `POST`, `PUT`, and `DELETE` (and sometimes `PATCH`). I found it intriguing
to learn that [IANA](https://www.iana.org/) maintains an
[official list of HTTP methods](https://www.iana.org/assignments/http-methods/http-methods.xhtml).
Now most of these won't be useful for every day web development as the bulk of the
methods appear to be used in WebDAV and related extensions.

It is interesting to note that the methods are designated as "safe" or "idempotent"
or both. A "safe" method is one that isn't meant to modify any data. `GET` is
categorized as "safe", but something like `POST` or `PUT` aren't safe as they are
meant to modify data. "Idempotent" means that the method can be repeated and have
the same results. So `PUT` is "idempotent" since you are updating something already
existing, but on the other hand, `POST` is not "idempotent" since calling it multiple
times could create multiple different things. Now all of this seems like common sense,
but I believe that it was educational to learn about the meanings and intentions behind the
different HTTP methods that I use daily.
