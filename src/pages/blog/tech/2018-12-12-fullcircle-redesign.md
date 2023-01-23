---
layout: ../../../layouts/BlogPostLayout.astro
title:  "Full Circle Redesign"
date:   2018-12-12 11:49:00 -0400
categories: ubuntu-touch-apps releases
---

Recently I had been talking with Joan CiberSheep about how his apps tend to look
better than mine and we discussed how to add styling to the page header of an app.
As things went along he ended up creating some slick looking mockups for a new
Full Circle app. The Full Circle app has been around for over three years and
started back when I was still pretty new to Ubuntu Touch. It was looking a bit
bland so it was due for a much needed makeover. When I started working on the
redesign I decided to start from scratch. And since I was starting from scratch
it made sense to me to use the Qt Quick Controls 2 (QQC2) that was added with the
switch to Xenial. This was an awesome opportunity to redesign the app and learn QQC2.

Using QQC2 with the Suru theme is a really great way to make Ubuntu Touch apps.
I was able to do most visual elements of the new Full Circle app with QQC2 and
only used the Ubuntu Touch UI Toolkit (UITK) for the Ubuntu Shape, system icons,
and the download service. From this experiencce I've begun to do some thinking about
how a next generation UITK would look being based on QQC2 & the Suru theme. I'm
looking forward to seeing more apps based on QQC2.

Get the latest QQC2 based Full Circle app fresh on [the OpenStore](https://open-store.io/app/fullcircle.bhdouglass).

Check out the [code on GitLab](https://gitlab.com/bhdouglass/fullcircle-app)
to see how it works with QQC2 & Suru.
