---
layout: ../../../layouts/BlogPostLayout.astro
title:  "OpenStore's August Updates"
date:   2017-08-26 00:10:00 -0400
categories: openstore releases
---

Over the course of this month there have been several new features and bug fixes
that have gone into the OpenStore:

## Uploading apps from an external link

You can now host a package on any web accessible url and use that to upload
new apps or new versions to the OpenStore

## Missing app view

Previously when you go to the page of an app that is missing or not yet published
it would show a blank template of a page. This has been fixed to allow a better
experience. This is especially useful if an app needs to be unpublished to
allow time for fixing bugs.

## Switch to using revisions

Before this update we were using version numbers as a way to differentiate app
versions. But because there are many different versioning schema this can make
it hard for the OpenStore app to properly updates consistently. The usage of
revisions is an idea from Canonical's click store and it allows us to have a
consistent versioning schema without forcing it on app developers. In a future
update to the OpenStore app it will use the new revisions for app updating.

## Paging Cleanup

Originally the OpenStore was only a handful of apps and having different pages
of apps wasn't necessary. But with the constant growth of the OpenStore a
hasty solution for paging was added. With a recent update the paging has
been cleaned up so we don't have all 10+ pages listed on the screen at once
(this was becoming unruly on mobile devices).

## Translations listed in app details

Thanks to an update in [click-parser](https://github.com/bhdouglass/click-parser)
the OpenStore can now detect translation files within a click and will list them
in the app details page.

## Two line tagline

The tagline is now limited to two lines when displayed on the website. This
prevents an app from taking over the whole list of apps by having a hugely
long tagline.

A huge thank you to all the supporters of the OpenStore and all the app
developers that keep us going!
