---
layout: ../../../layouts/TechPostLayout.astro
title:  "Indicator Weather Updates"
date:   2017-01-08 00:53:00 -0400
categories: indicator-weather ubuntu-touch
---

Since I launched [Indicator Weather](https://open.uappexplorer.com/app/indicator-weather.bhdouglass)
for Ubuntu Touch last month, I've uploaded 12 new releases. It has been quite a
few, but many have been minor bug fixes and translation updates. One major
highlight of the releases was v1.10. This release allowed users with non-writable
systems to use Indicator Weather. Thanks to the suggestions of a few fellow
developers, I was able to rewrite Indicator Weather to place its files in certain
folders in the home folder. This has exactly the same effect as the first release,
but without the messy requirement of a writable system. Another highlight was
the inclusion of OpenWeatherMap as an alternative to the default Dark Sky weather
api. Some user have reported that OpenWeatherMap is more reliable, so if you have
trouble with Dark Sky give OpenWeatherMap a try!

Over the 13 total releases there have been a total of 947 downloads. Keep in
mind that this is not a count of users. With the OpenStore you don't need to
login so we don't track downloads by user. So every user that upgrades will count
multiple times. That being said, release v1.10 had the most downloads, clocking
in at 221.

You can grab the latest Indicator Weather in the [OpenStore](https://open.uappexplorer.com/app/indicator-weather.bhdouglass).
