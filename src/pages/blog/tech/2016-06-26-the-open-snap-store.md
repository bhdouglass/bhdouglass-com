---
layout: ../../../layouts/TechPostLayout.astro
title:  "The Open(Snap)Store"
date:   2016-06-26 00:55:00 -0400
categories: openstore releases
---

There has been a major update to the OpenStore today. We now fully support snaps!
Due to the huge push by Ubuntu and Canonical around snaps recently, we decided
to integrate snaps into the OpenStore. Thanks to some work by Marius Gripsgård
(mariogrip) parsing data from snap packages was super easy (check out the
[click-parser](https://github.com/bhdouglass/click-parser) library).
After that it was just a matter of integrating snaps fully into the website.

Additionally the OpenStore can now serve as an alternative snap store for your
snapd instance. Just check out
[docs for into on how to set that up](https://open-store.io/docs#snap-store).

Have a snap package you want to get in the OpenStore? Just head on over to our
[submission page](https://open-store.io/submit) to get started!
