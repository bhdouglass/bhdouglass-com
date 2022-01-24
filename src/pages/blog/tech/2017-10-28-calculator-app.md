---
layout: ../../../layouts/TechPostLayout.astro
title:  "Calculator App Maintainer"
date:   2017-10-28 01:07:00 -0400
categories: ubuntu-touch-apps releases
---

A few weeks ago I became the maintainer for the Ubuntu Touch Calculator app.
It was sitting without a maintainer since UBports took over the Ubuntu Touch
project. So I decided to take up the reins to contribute back to the community.

My first order of business was adding support for
[clickable](https://github.com/bhdouglass/clickable). That out of the way
I moved on to the bottom edge. The old implementation of the bottom edge took
up a lot of space over the number pad (which was slightly mitigated by the fact
that spacing was added below the numberpad, but that looked strange) and didn't
follow the convention of the other core apps. So I swapped out the old
implementation for one that used the standard bottom edge component and cleared
up a potential usability issue.

My next plans are to comb through the old launchpad page for any outstanding
issues that still apply today. And with that I want to improve the user
experience of the calculator app as a whole.

Download the latest version of the calculator app
[fresh from the OpenStore](https://open.uappexplorer.com/app/com.ubuntu.calculator).
