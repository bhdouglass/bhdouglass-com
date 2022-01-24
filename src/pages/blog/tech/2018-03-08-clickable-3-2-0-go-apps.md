---
layout: ../../../layouts/TechPostLayout.astro
title:  "Clickable 3.2.0 - Go Apps"
date:   2018-03-08 02:05:00 -0500
categories: clickable releases
---

Version 3.2.0 of Clickable has just been release and built in the PPA! This
latest release brings an exciting new feature, support for Go apps! Thanks
to some awesome work by Aaron (aka nanu-c) you can now write apps in Go & QML.
To get started run `clickable init` and choose the new Go/QML App template.
When in the newly created project, set you `GOPATH` env variable and run
`go get -d .` to install dependencies. After the dependencies have been installed
start building your new app with `clickable`.

This new Go integration is very new and does not yet work with
`clickable --desktop`. Please report any issue you find in the
[clickable issue tracker on GitHub](https://github.com/bhdouglass/clickable/issues).
