---
layout: ../../../layouts/TechPostLayout.astro
title:  "Simply Light Updates"
date:   2016-03-22 00:07:00 -0400
categories: simply-light pebble
---

I just finished a round of minor updates to my
Pebble watchface, Simply Light. Most of these changes
are just code changes to use my new NodeJS modules:
[WeatherMan](https://www.npmjs.com/package/weather-man).

Unfortunately using a browserified module in Pebble
can be problematic, but only on iOS. The first
problem was the lack of promises, which was easily
solved by using a
[promise polyfill](https://github.com/stefanpenner/es6-promise).
The second problem was weird errors coming from one
of the polyfills that browserify uses. I solved
this by tricking the polyfill into thinking it was
running in a non-browser environment:

```js
window.location = {};
document.createElement = null;
```

[Find Simply Light in the app store](https://apps.getpebble.com/applications/5472c040c13ebf3ddf000045)
