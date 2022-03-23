---
layout: ../../../layouts/OldClickablePostLayout.astro
title:  "Clickable: Making Ubuntu Touch Apps Easy"
date:   2016-11-01 00:10:00 -0400
categories: clickable releases
---

Making apps for Ubuntu Touch has always been a serious of hoops to jump through
for me. They require the Ubuntu SDK IDE, an Ubuntu machine, and an Ubuntu phone.
I'd much rather use the editor of my choice, [Atom](https://atom.io/), rather
than the Ubuntu SDK IDE. And there is also the problem of me running Arch Linux,
not Ubuntu, on my laptop. So previously I would run the IDE on a virtual Ubuntu
machine and shuffle around a click file until I could install it on my test phone.
But not any more!

Clickable is a command line tool to build, package, and install click apps. It
support a variety of different app templates (including cmake, qmake, cordova, etc).
And builds everything in a lxd container, so you can run it anywhere you can run
lxd, no ubuntu required. With clickable you can string a few commands together
and have your app built, packaged, installed, and launched on your phone in one go.

If you are interested in using Clickable for your own projects, check out the
[Github repo](https://github.com/bhdouglass/clickable). Feel free to
[contact me](http://bhdouglass.com/contact.html) if you need any help!
