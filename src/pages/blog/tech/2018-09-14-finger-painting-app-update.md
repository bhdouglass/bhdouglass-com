---
layout: ../../../layouts/TechPostLayout.astro
title:  "Finger Painting App Update"
date:   2018-09-14 20:01:00 -0400
categories: ubuntu-touch-apps releases
---

Today I released version 3.0.0 of my
[Finger Painting app to the OpenStore](https://open-store.io/app/finger-painting.bhdouglass).
One of the main driving forces behind me wanting to do a new release was that I
wanted to add support for emoji stamps for my kids. Another reason was that the
dedication was to my two children, since the last update my third child was born
and has already passed his first birthday! The update was well worth it when my
son said "this is really cool!"

This latest update boasts a new bottom bar navigation that's reminiscent of the one
that Stefano wrote for the OpenStore app. I opted to do away with the bottom edge
menu for settings since it wasn't very kid friendly, and kids are the target audience.
In its place, the new bottom bar boasts colorful emojis from the
[Twemoji](https://twemoji.twitter.com/) set. All of the same functionality is there,
just kid friendly.

The new emoji stamps are svgs for their scalabiliy. But with QML svgs can prove to be
troublesome. Thanks to some tips from the King of All SVGs (Joan CiberSheep!), I was
able to avoid issues. The first trick is when using an svg in an `Image` element. If
you set the `sourceSize.width` to the elements width and the `sourceSize.height` to
the elements height then the svg will be rasterized properly and scale well. For an
example, check out
[/qml/Components/BottomBarIcon.qml#33](https://github.com/bhdouglass/finger-painting/blob/master/qml/Components/BottomBarIcon.qml#L33).
The other trick was to get the svgs to load into a QML `Canvas` element. You can specify
an image size, but doing this results in a distorted and blurry svg. It appears that the
`Canvas` rasterizes the svg at its viewport size and then scales it (ruining the scalable
part of svg). To overcome this I manually resized the svgs in Inkscape to have a larger
veiwport. This isn't exactly ideal, but it does fix the problem.

If you run into any problems feel free to
[open an issue on GitHub](https://github.com/bhdouglass/finger-painting/issues)!
