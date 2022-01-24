---
layout: ../../../layouts/TechPostLayout.astro
title:  "uApp Explorer + OpenStore"
date:   2017-06-12 09:23:00 -0400
categories: uappexplorer
---

I am very pleased to announce that uApp Explorer now supports apps from the
OpenStore! With the impending shutdown of the official Ubuntu Touch app store
OpenStore has exponentially grown in size. Any new apps from the OpenStore will
also show up in uApp Explorer. uApp Explorer will continue to show apps that
are only in the official Ubuntu Touch store (even after the shutdown). But apps
coming from the OpenStore will be marked as such.

In other news there has also been a major update to how snaps are handled in
uApp Explorer. As part of the shutdown of the Ubuntu Touch app store Canonical
has also updated their apis for getting snap info. I've switched uApp Explorer
to using the new apis and separated snaps from clicks. You can find the new
snaps [browse/search page here](https://uappexplorer.com/snaps). The web
address of existing snaps has also changed. There will be a redirect implemented
soon, but for now you will want to update your links.
