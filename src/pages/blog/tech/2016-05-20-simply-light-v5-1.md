---
layout: ../../../layouts/TechPostLayout.astro
title:  "Simply Light v5.1"
date:   2016-05-19 11:57:00 -0400
categories: pebble releases
---

I've just recently released Simply Light version 5.10 to the
[Pebble app store](https://apps.getpebble.com/en_US/application/5472c040c13ebf3ddf000045).
This version brings with it two great new features!

The first highlight is the new caching mechanism. Weather and/or AQI data is
cached on the phone so when Simply Light starts up it doesn't have to always
fetch info from the network. This is especially useful in situations where
notifications cause Simply Light to stop running.

The second new feature of this release is the Power Saving Sleep Mode.
When enabled, the new power saving mode will be triggered when you
fall asleep (thanks to Pebble Health). Power saving mode prevents any weather
or AQI information to be fetched from the network, and since you'll be sleeping
you don't actually need that info yet. Unfortunately the Pebble Health can take
a while to realize you are away (10 minutes in cases). So don't be surpised if
you still see the power saving mode active when you wake up. I've added some
extra code to minimize this, but your milage may vary.

![Simply Light](/images/blog/simply-light/banner.png)
