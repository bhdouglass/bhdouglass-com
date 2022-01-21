---
layout: ../../../layouts/TechPostLayout.astro
title:  "uApp Explorer's July Update"
date:   2016-07-25 00:57:00 -0400
categories: uappexplorer web
---

A new batch of changes has been released for uApp Explorer. I've added a new
page for [rss feeds](https://uappexplorer.com/feeds), which includes a feed for
[new snaps](http://feeds.feedburner.com/uAppExplorerNewSnaps). Along with the
new snap feed, I've also added some new filters for snaps. The first filter is
the "release filter". This filter allows you to search for snaps by their
targeted releases. Next is the "All Types" option of the types filter, which
allows you to search for both snaps and phone apps.

On a more technical note, I changed from using browserify to build the React
portion of uApp Explorer to using webpack. With browserify, unfortunately the
builds would take a very long time, which made developing a pain. With webpack
the builds take ngligable time which makes develoopment much nicer.
