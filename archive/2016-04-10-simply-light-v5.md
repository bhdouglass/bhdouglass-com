---
layout: ../../../layouts/BlogPostLayout.astro
title:  "Simply Light v5"
date:   2016-04-10 11:56:00 -0400
categories: pebble releases
---

Version 5 of my Simply Light watchface has been released! This version brings
a handful of new features and improvements to the table. This release is the first
to bring support for the Pebble Time Round ("chalk" in more technical terms).
Supporting the round smartwatch is interesting as a bunch of specific tweaks
had to be made in order to make it look decent.

The other big feature is a fully configurable status bar. It can be toggled
on/off, can have different colors for day and night, and can have 3 different
options for data. The status bar can show info about health data and may other
options.

The last big improvement is the UI code. It written and completely rewritten
for this release. The first iteration was much to unstable to be released. But
after refactoring it to only do most actions when needed it improved stability
and should help improve performance/battery life.

Grab Simply Light fresh from the [Pebble app store](https://web.archive.org/web/20180416040032/http://apps.getpebble.com/en_US/watchfaces).
Or check out all the changes in the [source](https://github.com/bhdouglass/simply-light).

![Simply Light](/images/blog/simply-light/banner.png)
