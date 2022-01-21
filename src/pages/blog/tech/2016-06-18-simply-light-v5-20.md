---
layout: ../../../layouts/TechPostLayout.astro
title:  "Simply Light v5.20 (Master Key)"
date:   2016-06-18 11:11:00 -0400
categories: simply-light pebble
---

About a week ago I learned about the new service, [Master Key](https://www.pmkey.xyz/).
It's a nifty little service to help Pebble users transfer their api keys between
services. With Master Key you only need an email address and a pin, no more needing
to copy/paste api keys!

With Simply Light v5.20 I've added support for Master Key, just head on over to
the settings and enter your email address and pin! Thanks to the help of my
library [angular-slate](https://github.com/bhdouglass/angular-slate), integrating
Master Key into Simply Light took only a matter of seconds.

If you are a Pebble developer I highly recommend integrating this service into
your watch apps/watchfaces. It appears that Simply Light may be the first may be
the first watchface to integrate Master Key. Lets get this ball rolling and make
life easier for Pebble users everywhere.

![Full Circle](/images/blog/simply-light/master-key.png)
