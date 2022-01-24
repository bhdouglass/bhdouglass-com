---
layout: ../../../layouts/TechPostLayout.astro
title:  "OpenStore Xenial Support - Phase 3"
date:   2018-06-08 11:42:00 -0400
categories: openstore releases
---

Phase 3 of Xenial support in the OpenStore is now complete! This is the last
phase of Xenial support and it's the automatic update of all apps that already
support Xenial without recompiling. QML only apps, HTML apps, and webapps can
all be run on Xenial without the need for a recompile or reupload. So to ease
the transition for users and developers I've created a script to automatically
make those apps available for Xenial. The update does not change the click
package or update the manifest/framework at all, it merely marks it as having
Xenial support. If you are running Xenial you should be able to get many of your
favorite apps from the OpenStore.

If you notice any issues or can't get these apps to install, let us know on
[Telegram](https://open-store.io/telegram) or
[GitHub](https://github.com/UbuntuOpenStore/openstore-meta/issues).
