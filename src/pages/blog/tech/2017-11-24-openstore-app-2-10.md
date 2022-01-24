---
layout: ../../../layouts/TechPostLayout.astro
title:  "OpenStore App v2.10 - NSFW Filtering"
date:   2017-11-24 01:51:00 -0400
categories: openstore releases
---

This week brings a few new updates to the OpenStore app by the wonderful Stefano V.
v2.10 brings with it a hot new feature of filtering NSFW content. Earlier this
November a new webapp with adult content was added to the OpenStore. Since new
apps are automatically featured in the homepage of the OpenStore app, this NSFW
app was on display for all to see. After some discussions with the community
and between myself and Stefano we have added a NSFW filter in the OpenStore app.
I added a flag in the OpenStore website to mark an app as NSFW and Stefano
implemented a filter in the app for this flag (NSFW content is hidden by default).
Currently this NSFW flag is a self-serve option, so it is up to the app authors
and admins to make sure this flag if properly marked. In the future we may need
to move to a more automated model, but while the OpenStore is small we won't
worry about that.

In other news, Stefano has added the ability to swipe between screenshots. This
is a much more intuitive method of interacting with the screenshots and is a
welcome addition. Along with images, app icons are now cached on the device
leading to a much snappier browsing experience.

A huge thank you to Stefano and the OpenStore Community for this update!
