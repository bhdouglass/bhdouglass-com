---
layout: ../../../layouts/BlogPostLayout.astro
title:  "Gearboy Color 4.0.0"
date:   2020-03-02 19:47:00 -0400
categories: ubuntu-touch-apps releases
---


Last week saw a major update to the Gearboy Color app, taking it to v4.0.0. For
those of you that might not know, Gearboy Color is not my original work. It is a
fork of Ryan Pattison's Gearboy port for Ubuntu Touch. Which is itself a fork of
Ignacio Sanchez' Gearboy project that is multi platform. I forked it after the
switch to Xenial for Ubuntu Touch when Ryan didn't respond to my pull request to
update the app for Xenial. Since then I've made some improvements to the interface
and user experience.

The latest release of Gearboy Color, v4.0.0, started because I wanted to apply
some cheat codes to the game that I had been playing. Because this wasn't a feature
of the original Gearboy at the time that it was forked by Ryan, I went browsing
the source for the most recent version of Gearboy. Since the two projects had
significantly diverged (200+ commits to the original since the fork) I had been
avoiding merging. So between wanting cheat codes and wanting to track upstream
better I took the plunge and got Gearboy Color updated with the latest from the
original cross platform Gearboy (which wasn't as bad as I thought it would be).
While it is not yet in a state for me to submit a pull request to upstream it
does contain some nice new features.

In addition to any bug fixes pulled from upstream, Gearboy Color now supports
save states and cheat codes. For save states you can use the buttons in the upper
left of the app to access the save or load state menu respectively. When loading
a state you may notice some audio glitches as that is one of the things that has
diverged significantly in the code. Besides that, both Game Genie and GameShark
cheat codes are supported. You can add them via the new ROM setting which can be
accessed via swiping on any ROM in the ROM list. Along with these changes, v4.0.0
also fixes dark mode. While the initial game screen and pad aren't dark mode ready,
the settings and rom list are. If you run into any issues with the latest release
please let me know over on the [GitLab page](https://gitlab.com/bhdouglass/gearboy/issues).
