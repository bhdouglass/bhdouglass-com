---
layout: ../../../layouts/BlogPostLayout.astro
title:  "New OpenStore Website"
date:   2017-12-19 00:28:00 -0500
categories: openstore releases
---

If you take a look at the OpenStore website today you will
find that it looks a bit different. I'm very pleased to finally
be able to release the new and improved OpenStore website
that I have been working on for the past month or so. In addition
to being completely redesigned from the ground up, the update
also comes with a few new features as well.

For starters, the browse page now has some new filtering options.
You can now filter by category and app type (app, web app, and scope).
With the filtering you can now sort the apps as well. Another neat
feature is the stats view page. It lists various stats about the apps listed
in the OpenStore (Wayne should be very excited about this!). You can
find the stats page [on the bottom of any page](https://open-store.io/stats).
There are many other improvements and tweaks that also went into this update.

Behind the scenes the site has switched from being based on Angular 1 and
Bootstrap, to being based on [Vue.js](https://vuejs.org) and the
[Vanilla Framework](https://vanillaframework.io). Both Vue and Vanilla have been
a treat to work with and should help ease development of new feature in the future.
Additionally I have now split the codebase between the
[api](https://github.com/UbuntuOpenStore/openstore-api) and the
[website itself](https://github.com/UbuntuOpenStore/openstore-web). This helps
keep the repos clean. To facilitate development of both the api and the website
I've also setup a [third repo](https://github.com/UbuntuOpenStore/openstore-web-dev)
with all the necessary bits to get you started developing on the OpenStore's website.

If you run into any issues with this release please don't hesitate
to reach out to us on [Telegram](https://open-store.io/telegram) or
though an [issue on GitHub](https://github.com/UbuntuOpenStore/openstore-meta/issues)!
