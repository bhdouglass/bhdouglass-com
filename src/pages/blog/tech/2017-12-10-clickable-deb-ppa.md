---
layout: ../../../layouts/TechPostLayout.astro
title:  "Clickable Deb & PPA"
date:   2017-12-10 00:12:00 -0500
categories: clickable releases
---

I'm very pleased to announce that clickable now is available via PPA as a .deb
for installing on your Ubuntu-based desktop. Thanks to a wonderful community
member JBB (JBBgameich on GitHub) who added the debian packaging recipes. You
can now find the deb ready for installing via the new ppa:
[ppa:bhdouglass/clickable](https://launchpad.net/~bhdouglass/+archive/ubuntu/clickable).

In addition to being available as a .deb, I have added initial, beta-level
support for using docker. Docker is similar to lxd but seems to have better
support outside of ubuntu. The Docker image was also simpler to build than
the lxd images and could lead to a more sustainable upgrade path in the future.
The docker support is not 100% matched with the lxd support but should soon
catch up. To check it out, first make sure you have docker installed and running
on your system. Then use the new `--docker` argument when running clickable.
