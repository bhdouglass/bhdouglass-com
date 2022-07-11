---
layout: ../../../layouts/TechPostLayout.astro
title:  "OpenStore Updates - March 29, 2016"
date:   2016-03-29 01:06:00 -0400
categories: openstore releases
---

I have just released several improvements to the
OpenStore website. The major change in this update
is the usage of [webpack](https://webpack.github.io)
to build the frontend (rather than my normal gulp
setup). This allows for proper minification and
bundling which will reduce the number of requests
required to load the page. I'm still working out
some kinks in my webpack configuration, but so far
the results are promising.

Other than switching to webpack, I have added an
option to include a changelog for the apps.
Additionally I modified the app view to also
display the type of package (app/scope/etc) to
help avoid confusion when installing scopes.

[Browse the OpenStore](https://open-store.io/)

[Check out the code](https://code.launchpad.net/~openstore-team/openstore-web/openstore-web)

![Falcon](/images/blog/openstore/screenshot1.png)
