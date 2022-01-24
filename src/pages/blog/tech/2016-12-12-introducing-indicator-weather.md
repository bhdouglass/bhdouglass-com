---
layout: ../../../layouts/TechPostLayout.astro
title:  "Introducing Indicator Weather"
date:   2016-12-12 01:05:00 -0400
categories: ubuntu-touch-apps releases
---

I'm pleased to release my next app for Ubuntu Touch, Indicator Weather. It's
actually more than just an app, it's also the one of the first third party
indicators for Ubuntu Touch. You can easily check the current weather from
your indicator bar.

Indicator Weather gets it's weather data from [Dark Sky](https://darksky.net/poweredby/),
you just have to provide your own API key. The indicator does not pull your current
location, but instead you'll have to manually enter a latitude and longitude.
Hopefully in a future version I'll be able to automatically determine your location
in the app and maybe even dynamically update you location as you move throughout
your day.

I hope with the release of Indicator Weather users will be able
to have even more customization option for their device, and also I hope that
my work here will help enable other developers to create their own indicators.
If you're interested in building and indicator check out [the source](https://github.com/bhdouglass/ut-indicator-weather)
for more information.

You can grab Indicator Weather in the [OpenStore](https://open.uappexplorer.com/app/indicator-weather.bhdouglass).

![Indicator Weather](/images/blog/indicator-weather/screenshot1.png)
