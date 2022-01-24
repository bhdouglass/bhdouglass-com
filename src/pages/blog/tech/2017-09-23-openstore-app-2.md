---
layout: ../../../layouts/TechPostLayout.astro
title:  "OpenStore App v2"
date:   2017-09-23 00:46:00 -0400
categories: openstore releases
---

I'm happy to announce that version 2 of the OpenStore app is now available
for downloading! Version 2.00 was released on Thursday and then version 2.01
was released the day after on Friday. The immediate bug fix was due to lots
of great feedback from our users. This latest version of the OpenStore app
was due to the great work done by Stefano V with an assist by Michal. I only
played a minor role in the app development as I tweaked some api endpoints, so
direct all your praise to them.

This version of the OpenStore brings with it an improved update mechanism that I
hinted at in my last post. We are now using revision numbers to track version
changes. What this means is that developers can follow whatever versioning
schema they want (provided each release has a unique version) and the users
don't run into any bugs with version comparison. This does lead to a situation
where apps installed from outside the OpenStore will show as updates to a lower
version number. But this is only the OpenStore giving you the latest stable
release to download to your device and (thanks to v2.01) there is a warning
letting you know this.

In addition to the revisions, the user interface has been redesigned with a
slick bottom bar navigation and fancy category lists with icons. This release
also bring faster start up time as we switched to a server side paging model.
Previously all app data was loaded into the app from the api. But as the number
of apps in the OpenStore has grown this has lead to slower and slower startup
times for the app. By switching to server side paging we dramatically speed
up the startup of the app. And with all these great new features there were
also many bugs squashed.

[Download the updated app from the OpenStore](https://open.uappexplorer.com/app/openstore.openstore-team)
